import {storiesOf} from '@storybook/html';

// --- Styles
import './styles/main.pcss';

// --- Tokens templates
import * as colors from './templates/tokens/colors.pug';
import * as elevations from './templates/tokens/elevations.pug';
import * as illustrations from './templates/tokens/illustrations.pug';
import * as typography from './templates/tokens/typography.pug';

// --- Design system templates
import * as antd from './templates/design-system/antd.pug';
import * as branding from './templates/design-system/branding.pug';
import * as reactive from './templates/design-system/reactive.pug';

storiesOf('Token Library', module)
  .add('Colors', () => colors)
  .add('Elevations', () => elevations)
  .add('Illustrations', () => illustrations)
  .add('Typography', () => typography);

storiesOf('Design System', module)
  .add('Reactive UI', () => reactive)
  .add('Ant Design', () => antd)
  .add('Branding', () => branding);
