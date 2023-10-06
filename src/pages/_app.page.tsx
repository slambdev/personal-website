import { EmotionCache } from '@emotion/react';
import { type NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import Head from 'next/head';
import { type ReactElement, type ReactNode } from 'react';

import { AppWrapper } from '../components/app-wrapper';
import { styled } from '@mui/material';

type AppProps = {
  emotionCache?: EmotionCache;
  Component: PageWithLayout;
} & NextAppProps;

/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/ban-types */
// https://nextjs.org/docs/basic-features/layouts
export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
/* eslint-enable @typescript-eslint/naming-convention, @typescript-eslint/ban-types */

/* eslint-disable quotes */
// eslint-disable-next-line new-cap
const font = Manrope({
  subsets: ['latin'],
  display: 'swap',
});
/* eslint-enable quotes */

const Main = styled(`main`)({
  marginTop: `1.5rem`,
});

const AppBase = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Shannen Lambdin</title>
        <meta name='description' content='Shannen Lambdin' />
        <meta
          name='viewport'
          content='viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
         <link rel='icon' href='/strong.png' sizes='any' />
      </Head>

      <Main className={font.className}>
        {getLayout(<Component {...pageProps} />)}
      </Main>
    </>
  );
};

const App = (props: AppProps) => (
  <AppWrapper emotionCache={props.emotionCache}>
    <AppBase {...props} />
  </AppWrapper>
);

export default App;
