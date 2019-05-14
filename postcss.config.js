'use strict';

const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  plugins: [
    cssnano({
      preset: [
        'advanced',
        {
          autoprefixer: {
            grid: true,
            browsers: [
              'last 2 versions',
              'not ie <= 11',
              'not op_mini all',
              'not dead',
              'not < 0.5%'
            ]
          }
        }
      ]
    }),
    postcssNested,
    postcssCustomMedia({preserve: false})
  ]
};
