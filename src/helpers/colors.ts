// --- Color palettes
import defaultPalette from '../attrs/colors/default-palette';
import legacyPalette from '../attrs/colors/legacy-palette';

const colors = {default: defaultPalette, legacy: legacyPalette};

export function getColorPalette(theme: 'default' | 'legacy') {
  return colors[theme];
}
