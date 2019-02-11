const autoprefixer = require('autoprefixer');
const flexbugs = require('postcss-flexbugs-fixes');

module.exports = () => ({
  plugins: [autoprefixer, flexbugs],
});
