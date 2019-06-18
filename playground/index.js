import {storiesOf} from '@storybook/html';

// --- Styles
import './styles/main.pcss';

// --- Design Tokens Templates
import * as colors from './templates/design-tokens/colors.pug';
import * as elevations from './templates/design-tokens/elevations.pug';
import * as illustrations from './templates/design-tokens/illustrations.pug';
import * as typography from './templates/design-tokens/typography.pug';

// --- Design Tokens Templates - Markdown
// import colorNotes from './notes/design-tokens/colors.md';
// import elevationNotes from './notes/design-tokens/elevations.md';
// import illustrationNotes from './notes/design-tokens/illustrations.md';
// import typographyNotes from './notes/design-tokens/typography.md';

// --- Design System Templates
import antd from './templates/design-system/antd.pug';
import branding from './templates/design-system/branding.pug';
import reactive from './templates/design-system/reactive.pug';

storiesOf('Design Tokens', module)
  .add('Colors', () => colors)
  .add('Elevations', () => elevations)
  .add('Illustrations', () => illustrations)
  .add('Typography', () => typography);

storiesOf('Design System', module)
  .add('Reactive UI', () => reactive)
  .add('Ant Design', () => antd)
  .add('Branding', () => branding);
