// --- Helpers
import * as colorHelpers from './helpers/color';
import * as layoutHelpers from './helpers/layout';
import * as miscHelpers from './helpers/misc';

// --- Miscellaneous attributes
import * as layoutSizes from './attrs/layout-sizes';
import mediaQueries from './attrs/media-queries';
import * as typography from './attrs/typography';
import zIndexes from './attrs/z-indexes';

export const helpers = {
  color: colorHelpers,
  layout: layoutHelpers,
  misc: miscHelpers
};

// --- Design Tokens
export default {
  sizes: layoutSizes,
  mq: mediaQueries,
  typo: typography,
  z: zIndexes
};
