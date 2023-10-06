/* istanbul ignore file: boilerplate and metadata */

import { EmotionCache, useTheme } from '@emotion/react';
import { type NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import Head from 'next/head';
import { type ReactElement, type ReactNode } from 'react';
import {
  sx,
  breakpoint,
  breakpointDown,
  sectionGuttersY,
  headerGutterTop,
  hideScrollBars,
  gap,
} from '../sx';

import { AppWrapper } from '../components/app-wrapper';
import { Drawer, styled, Typography } from '@mui/material';

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

const Header = styled(`header`)(sx([
  (theme) => ({
      pt: headerGutterTop,
      pb: sectionGuttersY,
      display: `flex`,
      justifyContent: `center`,
      width: `100%`,
      lineHeight: 0,
      position: `fixed`,
      top: 0,
      zIndex: `appBar`,
      backgroundColor: theme.palette.primary.dark,
  }),
]),
);

const Main = styled(`main`)({
  marginTop: `1.5rem`,
});

const AppBase = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();
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
      </Head>

      {/* <Drawer
            variant="permanent"
            sx={{
              backgroundColor: theme.palette.background.default,
              width: `500px`,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: `500px`, boxSizing: 'border-box' },
            }}
          >
            <Typography variant="h1" sx={{ paddingBottom: gap }}>Hello, World!</Typography>
            <Typography variant="h1" sx={{ paddingBottom: gap }}>Shannen Lambdin</Typography>
            <Typography variant="h2" sx={{ paddingBottom: gap }}>Senior Fullstack Engineer.</Typography>
            <Typography variant="body1">Based in Raleigh, NC.</Typography>
            
          </Drawer> */}
      
      <Main className={font.className}>
        {/* <Header aria-label='Shannen Lambdin'>
            <Typography variant="h3" sx={{ color: theme.palette.primary.contrastText}}>Shannen Lambdin</Typography>
        </Header> */}
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
