const merge = require('webpack-merge');
const common = require('./tools/webpack/webpack.common.js');
const production = require('./tools/webpack/webpack.production.js');
const development = require('./tools/webpack/webpack.development.js');
const { IS_DEVELOPMENT } = require('./tools/constants');

module.exports = IS_DEVELOPMENT
  ? merge([common, development])
  : merge([production, common]);
