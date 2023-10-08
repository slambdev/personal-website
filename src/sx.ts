import type { Theme } from '@emotion/react';
import { Box } from '@mui/material';
import {
  type Breakpoint,
  type Breakpoints,
  styled,
  type SxProps,
} from '@mui/material/styles';
import type { ResponsiveStyleValue, SystemStyleObject } from '@mui/system';

// utility exist to get the correct typings on `sx` to work with emotion and our theme
export const sx =
  (styles: SxProps<Theme>) =>
  ({ theme }: { theme: Theme }) =>
    theme.sx(styles);

export const gap = 3;
export const halfGap = gap / 2;
export const fourthGap = gap / 4;

export const breakpointHelper =
  (
    direction: keyof Omit<
      Breakpoints,
      `keys` | `values` | `unit` | `between`
    > = `up`,
  ) =>
  (breakpoint: Breakpoint, styles: SxProps<Theme>) =>
  ({ breakpoints }: Theme) => ({
    [breakpoints[direction](breakpoint)]: styles,
  });

/** apply `styles` to screen widths greater than the screen size `breakpoint` (inclusive) */
export const breakpoint = breakpointHelper();

/** apply `styles` to screen widths less than the screen size `breakpoint` (exclusive) */
export const breakpointDown = breakpointHelper(`down`);

/** Helper function for using sxProp by converting to spreadable.
 *
 * You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
 *  https://mui.com/system/the-sx-prop/#passing-sx-prop */
export const spreadable = (
  sx?: SxProps<Theme>,
): Array<
  | SystemStyleObject
  | (SystemStyleObject &
      Record<
        string,
        | SystemStyleObject
        | ResponsiveStyleValue<number | string>
        | Record<
            string,
            SystemStyleObject | ResponsiveStyleValue<number | string>
          >
      >)
> => (Array.isArray(sx) ? /* istanbul ignore next */ sx : [sx]);

export const hideScrollBars = {
  '::-webkit-scrollbar': { display: `none` },
};

export const FlexBox = styled(Box)({
  display: `flex`,
});
