const MQ = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

function roundMQ(mq: number) {
  return mq - 0.02;
}

const range = {
  small: `(min-width: ${MQ.sm}px) and (max-width: ${roundMQ(MQ.md)}px)`, // Small devices only (tablets, 768px and up)
  medium: `(min-width: ${MQ.md}px) and (max-width: ${roundMQ(MQ.lg)}px)`, // Medium devices only (desktops, 992px and up)
  large: `(min-width: ${MQ.lg}px) and (max-width: ${roundMQ(MQ.xl)}px)` // Large devices only (large desktops, 1200px and up)
};

export default {
  small: `(max-width: ${MQ.md}px)`, // Small devices (tablets, 768px and up)
  medium: `(max-width: ${MQ.lg}px)`, // Medium devices (desktops, 992px and up)
  large: `(max-width: ${MQ.xl}px)`, // Large devices (large desktops, 1200px and up)
  range
};
