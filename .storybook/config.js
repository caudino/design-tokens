import {addDecorator, addParameters, configure} from '@storybook/html';

import {CLAB_THEME} from './theme/contactlab';

const STORYBOOK_CONFIG = {
  options: {
    theme: CLAB_THEME,
    showPanel: false
  }
};

addParameters(STORYBOOK_CONFIG);
configure(() => require('../playground/index'), module);
