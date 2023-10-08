/* istanbul ignore file: boilerplate and metadata */

import createEmotionServer from '@emotion/server/create-instance';
import { randomBytes } from 'crypto';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { createEmotionCache } from '../create-emotion-cache';
import { theme } from '../theme';

export default class Document extends NextDocument {
  render() {
    const nonce = randomBytes(128).toString('base64')
    let csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`

    // In dev we allow 'unsafe-eval', so HMR doesn't trigger the CSP
    if (process.env.NODE_ENV !== 'production') {
      csp += ` 'unsafe-eval'`;
    }

    return (
      <Html lang='en'>
        <Head nonce={nonce}>
          {/* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
          <link rel='icon' href='/strong.png' sizes='any' />
          <link rel='manifest' href='/manifest.json' />

          {/* add to homescreen for ios */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='Shannen Lambdin' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />

          <meta name='color-scheme' content='dark' />
          <meta name='theme-color' content={theme.palette.primary.light} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='msapplication-tap-highlight' content='no' />

          <meta httpEquiv="Content-Security-Policy" content={csp} />

          {/* Inject MUI styles first to match with `prepend: true` configuration. */}
          { }
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

/**
 * From: https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript
 */
Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

   
  ctx.renderPage = async () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => (
        <App emotionCache={cache} {...props} />
      ),
    });

  const initialProps = await NextDocument.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(({ key, ids, css }) => (
    <style
      key={key}
       
      dangerouslySetInnerHTML={{ __html: css }}
      data-emotion={`${key} ${ids.join(` `)}`}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
