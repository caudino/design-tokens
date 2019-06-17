import {create} from '@storybook/theming';

export const CLAB_THEME = create({
  brandImage: 'https://svgshare.com/i/De4.svg',
  brandTitle: 'Contactlab Design Tokens',

  base: 'light',

  colorPrimary: '#36546d',
  colorSecondary: '#36546d',

  // // UI
  appBg: '#fff',
  appBorderColor: '#deebf4',
  appBorderRadius: 8,
  appContentBg: '#fff',

  // // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode:
    '"Inconsolata", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace',

  // // Text colors
  textColor: '#36546d',
  textInverseColor: 'rgba(3, 145, 236, 0.7)',

  // Toolbar default and active colors
  barBg: '#fff',
  barSelectedColor: '#1d3344',
  barTextColor: '#7e96a8',

  // Form colors
  inputBg: '#ƒff',
  inputBorder: '#deebf4',
  inputBorderRadius: 8,
  inputTextColor: '#36546d'
});
