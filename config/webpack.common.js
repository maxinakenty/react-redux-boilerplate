const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  entry: {
    bundle: ['babel-polyfill', `${PATH.src}/index`],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATH.src}/index.html`,
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'stage-0', 'react'],
              plugins: [
                [
                  'react-css-modules',
                  {
                    generateScopedName: '[local]__[hash:base64:8]',
                    filetypes: {
                      '.scss': {
                        syntax: 'postcss-scss',
                      },
                    },
                    webpackHotModuleReloading: true,
                  },
                ],
              ],
            },
          },
        ],
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
