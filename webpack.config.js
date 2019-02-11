const merge = require('webpack-merge');
const common = require('./webpack/webpack.common.js');
const production = require('./webpack/webpack.production.js');
const development = require('./webpack/webpack.development.js');
const IS_DEVELOPMENT = require('./constants');

module.exports = IS_DEVELOPMENT
  ? merge([common, development])
  : merge([production, common]);
