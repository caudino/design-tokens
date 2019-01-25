import {roundMQ} from '../helpers/misc';

export const sizes = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const range = {
  extraSmall: `(max-width: ${sizes.xs})`, // Extra small devices (phones, less than 768px)
  small: `(min-width: ${sizes.sm}px) and (max-width: ${roundMQ(sizes.md)}px)`, // Small devices only (tablets, 768px and up)
  medium: `(min-width: ${sizes.md}px) and (max-width: ${roundMQ(sizes.lg)}px)`, // Medium devices only (desktops, 992px and up)
  large: `(min-width: ${sizes.lg}px) and (max-width: ${roundMQ(sizes.xl)}px)`, // Large devices only (large desktops, 1200px and up)
  extraLarge: `(min-width: ${sizes.xl})`
};

export const breakpoints = {
  small: `(max-width: ${sizes.md}px)`, // Small devices (tablets, 768px and up)
  medium: `(max-width: ${sizes.lg}px)`, // Medium devices (desktops, 992px and up)
  large: `(max-width: ${sizes.xl}px)`, // Large devices (large desktops, 1200px and up)
  range
};
