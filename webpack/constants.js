const { resolve } = require('path');

const SRC = resolve(__dirname, '../src');
const PUBLIC = resolve(__dirname, '../public');
const FAVICON = resolve(SRC, 'favicon.png');
const POSTCSS = resolve(__dirname, '../postcss.config.js');

module.exports = {
  SRC,
  PUBLIC,
  FAVICON,
  POSTCSS,
};
