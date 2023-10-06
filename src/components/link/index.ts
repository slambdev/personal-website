import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

export type { LinkProps } from 'next/link';

export const Link = styled(NextLink)({
  color: `inherit`,
});
