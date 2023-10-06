import { CacheProvider, type EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { type ReactNode, StrictMode } from 'react';

import { createEmotionCache } from '../create-emotion-cache';
import { theme } from '../theme';

const clientSideEmotionCache = createEmotionCache();

export interface AppWrapperProps {
  children: ReactNode;
  emotionCache?: EmotionCache;
}

export const AppWrapper = ({
  children,
  emotionCache = clientSideEmotionCache,
}: AppWrapperProps) => (
  <StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={() => ({
            body: {
              position: `relative`,
            },
          })}
        />
        {children}
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
