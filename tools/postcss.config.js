const autoprefixer = require('autoprefixer');
const short = require('postcss-short');
const flexbugs = require('postcss-flexbugs-fixes');
const customSelectors = require('postcss-custom-selectors');
const selectorNot = require('postcss-selector-not');

module.exports = () => ({
  plugins: [autoprefixer(), short, flexbugs, customSelectors, selectorNot],
});
