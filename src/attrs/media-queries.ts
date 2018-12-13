import {roundMQ} from '../helpers/misc';

const MQ = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const range = {
  extraSmall: `(max-width: ${MQ.xs})`, // Extra small devices (phones, less than 768px)
  small: `(min-width: ${MQ.sm}px) and (max-width: ${roundMQ(MQ.md)}px)`, // Small devices only (tablets, 768px and up)
  medium: `(min-width: ${MQ.md}px) and (max-width: ${roundMQ(MQ.lg)}px)`, // Medium devices only (desktops, 992px and up)
  large: `(min-width: ${MQ.lg}px) and (max-width: ${roundMQ(MQ.xl)}px)`, // Large devices only (large desktops, 1200px and up)
  extraLarge: `(min-width: ${MQ.xl})`
};

export default {
  small: `(max-width: ${MQ.md}px)`, // Small devices (tablets, 768px and up)
  medium: `(max-width: ${MQ.lg}px)`, // Medium devices (desktops, 992px and up)
  large: `(max-width: ${MQ.xl}px)`, // Large devices (large desktops, 1200px and up)
  range
};
