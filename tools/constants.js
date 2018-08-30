const { join, resolve } = require('path');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const PATH = {
  srcFolder: resolve(__dirname, 'src'),
  entryJs: join(__dirname, '..', 'src', 'index.js'),
  indexHtml: join(__dirname, '..', 'src', 'index.html'),
  publicFolder: join(__dirname, '..', 'public'),
  postcssConfig: join(__dirname, 'postcss.config.js'),
  favicon: join(__dirname, '..', 'src', 'favicon.png'),
  stylesFolder: join(__dirname, '..', 'src', 'styles'),
};

module.exports = { IS_DEVELOPMENT, PATH };
