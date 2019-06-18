import {addParameters, configure} from '@storybook/html';

import {CLAB_THEME} from './theme/contactlab';

const STORYBOOK_CONFIG = {
  options: {
    showPanel: false,
    theme: CLAB_THEME
  }
};

addParameters(STORYBOOK_CONFIG);
configure(() => require('../playground'), module);
