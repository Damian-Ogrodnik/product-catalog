import { breakpoints } from 'config/styles';

const mediaQ = (size: number): string => `@media only screen and (max-width: ${size}px)`;

export const mediaQuery = {
  small: mediaQ(breakpoints.small),
  medium: mediaQ(breakpoints.medium),
  large: mediaQ(breakpoints.large),
  extraLarge: mediaQ(breakpoints.extraLarge),
  big: mediaQ(breakpoints.big),
  huge: mediaQ(breakpoints.huge),
};
