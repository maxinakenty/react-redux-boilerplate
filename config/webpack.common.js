const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  context: PATH.src,
  entry: {
    common: `${PATH.src}/layouts/common.js`,
    index: `${PATH.src}/pages/index`,
    about: `${PATH.src}/pages/about`,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
      },
    ],
  },
};
