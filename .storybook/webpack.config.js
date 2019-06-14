const path = require('path');

const LIB_DIR = path.resolve(__dirname, '../lib');
const PLAYGROUND_DIR = path.resolve(__dirname, '../playground');

const getPcssLoaders = ({sourceMap}) => [
  {
    loader: 'style-loader',
    options: {
      sourceMap
    }
  },
  {
    loader: 'css-loader',
    options: {
      sourceMap
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap
    }
  }
];

module.exports = async ({config, mode}) => {
  config.module.rules.push(
    {
      test: /\.pcss$/,
      use: getPcssLoaders({
        sourceMap: mode === 'DEVELOPMENT'
      }),
      include: [LIB_DIR, PLAYGROUND_DIR]
    },
    {
      test: /\.pug$/,
      loaders: ['html-loader', 'pug-html-loader']
    }
  );

  return config;
};
