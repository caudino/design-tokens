import {create} from '@storybook/theming';

export const CLAB_THEME = create({
  brandImage: 'https://svgshare.com/i/DrV.svg',
  brandTitle: 'Contactlab Design Team',

  base: 'light',

  colorPrimary: '#001420',
  colorSecondary: '#0391EC',

  // UI
  appBg: '#F7FCFF',
  appBorderColor: '#DEEBF4',
  appBorderRadius: 8,
  appContentBg: '#FFF',

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode:
    '"Inconsolata", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace',

  // Text colors
  textColor: '#001420',
  textInverseColor: 'rgba(3, 145, 236, 0.7)',

  // Toolbar default and active colors
  barBg: '#FFF',
  barSelectedColor: '#394E5C',
  barTextColor: '#92A5B2',

  // Form colors
  inputBg: '#FFF',
  inputBorder: '#DEEBF4',
  inputBorderRadius: 8,
  inputTextColor: '#001420',
});
