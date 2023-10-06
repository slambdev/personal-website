import { common } from '@mui/material/colors';
import {
  createTheme,
  type Theme as MuiTheme,
  type ThemeOptions,
} from '@mui/material/styles';

import { gap } from './sx';

interface ColorHues {
  900: string;
}

 
declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette[`grey`];
    red: ColorHues;
    green: ColorHues;
    border: string;
    backdrop: string;
  }

  interface PaletteOptions {
    gray: PaletteOptions[`grey`];
    red: ColorHues;
    green: ColorHues;
    border: string;
    backdrop: string;
  }

  interface ShapeOptions {
    borderRadius: number;
  }

  interface TypeBackground {
    defaultLeft: string;
    defaultRight: string;
    paperHover: string;
  }

  interface Theme {
    shadows: string[];
    sx: Theme[`unstable_sx`];
  }

   
  interface ZIndex {
    background: number;
    body: number;
    footer: number;
  }
}

 
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    active: true;
    standard: true;
    transparent: true;
  }
}

 
declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

 
declare module '@emotion/react' {
  interface Theme extends MuiTheme {}
}

/* eslint-disable @typescript-eslint/naming-convention */
const gray = {
  900: `#121212`,
  800: `#292929`,
  700: `#393939`,
  600: `#525252`,
  500: `#a5a5a5`,
  300: `#d3d3d3`,
  200: `#e8e8e8`,
  50: `#ffffff`,
};

const red = {
  900: `#E53935`,
};

const green = {
  900: `#00B468`,
};

const backdrop = `${gray[900]}d9`;

// Casting to force the correct Theme
 
const components = {
} as ThemeOptions[`components`];
/* eslint-enable @typescript-eslint/naming-convention */

// A custom theme for this app
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: `light`,
    primary: {
      light: `#06347B`,
      main: common.black,
      dark: `#2B304D`,
      contrastText: common.white,
    },
    secondary: {
      light: gray[700],
      main: gray[800],
      dark: gray[900],
      contrastText: `#06347B`,
    },
    background: {
      default: `#FDFDFD`,
      defaultLeft: `#106DFC`,
      defaultRight: `#FDFDFD`,
      paper: gray[800],
      paperHover: gray[700],
    },
    border: gray[700],
    gray,
    grey: gray,
    red,
    green,
    action: {
      disabled: gray[700],
      disabledBackground: gray[800],
    },
    backdrop,
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: `"Manrope", sans-serif`,
    h1: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
  },
  components,
  zIndex: {
    background: -100,
    body: 300,
    footer: 500,
  },
});

theme.typography = {
  ...theme.typography,
  h2: {
    ...theme.typography.h3,
    fontWeight: `bold`,
    fontSize: `1.7rem`,
    [theme.breakpoints.up(`lg`)]: {
      fontSize: `2rem`,
    },
    paddingBottom: gap,
  },
  h3: {
    ...theme.typography.body1,
    fontSize: `1.125rem`,
    fontWeight: `bold`,
    textTransform: `uppercase`,
    letterSpacing: `0.05em`,
    [theme.breakpoints.up(`lg`)]: {
      fontSize: `1.25rem`,
    },
  },
  body1: {
    ...theme.typography.body1,
    fontSize: `1rem`,
    [theme.breakpoints.up(`lg`)]: {
      fontSize: `1.25rem`,
    },
  },
  body2: {
    ...theme.typography.body2,
    fontSize: `1rem`,
    fontWeight: `bold`,
    [theme.breakpoints.up(`lg`)]: {
      fontSize: `1.25rem`,
    },
  },
  caption: {
    ...theme.typography.caption,
    fontSize: `0.625rem`,
  },
  button: {
    ...theme.typography.button,
    textTransform: `unset`,
    fontSize: `1rem`,
    fontWeight: `bold`,
    [theme.breakpoints.up(`lg`)]: {
      fontSize: `1.25rem`,
    },
  },
};

theme.shadows = [
  `none`,
  `1px 2px 40px ${theme.palette.gray[300]}1a`,
  ...(Array.from({ length: 23 }).fill(`none`) as string[]),
];

theme.sx = theme.unstable_sx;
