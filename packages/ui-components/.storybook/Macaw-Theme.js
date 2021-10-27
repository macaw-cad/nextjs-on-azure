// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // base
  brandTitle: 'Macaw NextJS On Azure',
  brandUrl: '/',
  brandImage: '/macaw.svg',

  /* colorPrimary: 'red', */
  colorSecondary: '#000',

  // Text colors
  textColor: '#1c1c1c',
  /* textInverseColor: '#000000', */

  // Typography
  fontBase: 'Assistant, "Segoe UI", Roboto, "Open Sans", sans-serif',

  // UI
  appBg: '#f6f6f6',
  /* appContentBg: '#333',
  appBorderColor: 'red',
  appBorderRadius: 4, */

  // Toolbar default and active colors
  /* barTextColor: 'white',
  barSelectedColor: '#ccc',
  barBg: 'hsla(188, 31%, 20%, 1)', */

});