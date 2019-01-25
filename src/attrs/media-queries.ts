import {roundMQ} from '../helpers/misc';

export const size = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const range = {
  extraSmall: `(max-width: ${size.xs})`, // Extra small devices (phones, less than 768px)
  small: `(min-width: ${size.sm}px) and (max-width: ${roundMQ(size.md)}px)`, // Small devices only (tablets, 768px and up)
  medium: `(min-width: ${size.md}px) and (max-width: ${roundMQ(size.lg)}px)`, // Medium devices only (desktops, 992px and up)
  large: `(min-width: ${size.lg}px) and (max-width: ${roundMQ(size.xl)}px)`, // Large devices only (large desktops, 1200px and up)
  extraLarge: `(min-width: ${size.xl})`
};

export const MQ = {
  small: `(max-width: ${size.md}px)`, // Small devices (tablets, 768px and up)
  medium: `(max-width: ${size.lg}px)`, // Medium devices (desktops, 992px and up)
  large: `(max-width: ${size.xl}px)`, // Large devices (large desktops, 1200px and up)
  range
};
