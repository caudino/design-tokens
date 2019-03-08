'use strict';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    postcssImport,
    cssnano({
      preset: 'default'
    }),
    autoprefixer,
    postcssNesting
  ]
};
