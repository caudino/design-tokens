// --- Helpers
import * as layoutHelpers from './helpers/layout';
import * as miscHelpers from './helpers/misc';

// --- Attributes
import {colors} from './attrs/colors';
import * as layoutSizes from './attrs/layout-sizes';
import * as mediaQueries from './attrs/media-queries';
import * as typography from './attrs/typography';
import {zIndexes} from './attrs/z-indexes';

export const helpers = {
  layout: layoutHelpers,
  misc: miscHelpers
};

// --- Design Tokens
export const designTokens = {
  colors,
  mq: mediaQueries,
  sizes: layoutSizes,
  typo: typography,
  z: zIndexes
};
