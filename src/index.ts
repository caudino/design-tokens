// --- Color palettes
import defaultPalette from './attrs/colors/default-palette';
import legacyPalette from './attrs/colors/legacy-palette';
const colors = {default: defaultPalette, legacy: legacyPalette};

// --- Miscellaneous attributes
import * as layoutSizes from './attrs/layout-sizes';
import mediaQueries from './attrs/media-queries';
import * as typography from './attrs/typography';
import zIndexes from './attrs/z-indexes';

// --- Helpers
import * as layoutHelpers from './helpers/layout';
export const helpers = {
  layout: layoutHelpers
};

// --- Design Tokens
export default {
  sizes: layoutSizes,
  mq: mediaQueries,
  typo: typography,
  z: zIndexes,
  getColorPalette: (theme: 'default' | 'legacy') => colors[theme]
};
