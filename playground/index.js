import {storiesOf} from '@storybook/html';

// --- Styles
import './styles/main.pcss';

// --- Design Tokens Templates
import * as colors from './templates/design-tokens/colors.pug';
import * as elevations from './templates/design-tokens/elevations.pug';
import * as illustrations from './templates/design-tokens/illustrations.pug';
import * as typography from './templates/design-tokens/typography.pug';

// --- Design Tokens Templates - Markdown
import colorNotes from '../docs/design-tokens/colors.md';
import elevationNotes from '../docs/design-tokens/elevations.md';
import illustrationNotes from '../docs/design-tokens/illustrations.md';
import typographyNotes from '../docs/design-tokens/typography.md';

// --- Design System Templates
import antd from './templates/design-system/antd.pug';
import branding from './templates/design-system/branding.pug';
import reactive from './templates/design-system/reactive.pug';

storiesOf('Design Tokens', module)
  .add('Colors', () => colors, {
    notes: {
      markdown: colorNotes
    }
  })
  .add('Elevations', () => elevations, {
    notes: {
      markdown: elevationNotes
    }
  })
  .add('Illustrations', () => illustrations, {
    notes: {
      markdown: illustrationNotes
    }
  })
  .add('Typography', () => typography, {
    notes: {
      markdown: typographyNotes
    }
  });

storiesOf('Design System', module)
  .add('Reactive UI', () => reactive)
  .add('Ant Design', () => antd)
  .add('Branding', () => branding);
