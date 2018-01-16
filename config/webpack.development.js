const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: `${PATH.src}/pages/index/index.pug`,
      filename: 'index.html',
      chunks: ['common', 'index'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATH.src}/pages/about/about.pug`,
      filename: 'about.html',
      chunks: ['common', 'index'],
    }),
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devServer: {
    port: 3000,
    stats: {
      'errors-only': true,
    },
  },
};
