const os = require('os');
const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const { browsers, cssModulesHash } = require('./config');

const maxThreads = os.cpus().length - 1;
const happyThreadPool = HappyPack.ThreadPool({
  size: maxThreads,
});

const PATH = {
  src: join(__dirname, '..', 'src'),
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
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: [
              [
                'env',
                {
                  targets: browsers,
                },
              ],
              'stage-0',
              'react',
            ],
            plugins: [
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
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'happypack/loader?id=js',
      },
    ],
  },
};
