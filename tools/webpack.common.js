const { join } = require('path');
const { NoEmitOnErrorsPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { cssModulesHash } = require('../package.json');

const PATH = {
  src: join(__dirname, '..', 'src'),
};

module.exports = {
  entry: {
    bundle: `${PATH.src}/index`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${PATH.src}/index.html`,
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: 'url-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'stage-0', 'react'],
              plugins: [
                'transform-decorators-legacy',
                'react-hot-loader/babel',
                [
                  'react-css-modules',
                  {
                    generateScopedName: cssModulesHash,
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
    ],
  },
};
