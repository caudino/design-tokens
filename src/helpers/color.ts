// --- Color palettes
import {defaultPalette} from '../attrs/colors/default-palette';
import {legacyPalette} from '../attrs/colors/legacy-palette';
import {PaletteSchema} from '../attrs/colors/palette-shema';

const colors = {default: defaultPalette, legacy: legacyPalette};

export function getPalette(theme: 'default' | 'legacy'): PaletteSchema {
  return colors[theme];
}
