const { NoEmitOnErrorsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { SRC } = require('./constants');

module.exports = {
  context: SRC,
  entry: {
    bundle: ['@babel/polyfill', './index'],
  },
  resolve: {
    modules: ['node_modules'],
    alias: {},
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: resolve(SRC, 'index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
};
