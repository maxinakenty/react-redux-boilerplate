const path = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const PATH = {
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/js/',
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json',
      path: PATH.dist,
    }),
  ],
  watch: false,
};
