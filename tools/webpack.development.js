const { join } = require('path');
const webpack = require('webpack');
const { cssModulesHash } = require('../package.json');

const PATH = {
  postcssConfig: join(__dirname, 'postcss.config.js'),
};

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devServer: {
    overlay: true,
    port: 3000,
    hot: true,
    stats: {
      'errors-only': true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: cssModulesHash,
              minimize: false,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: PATH.postcssConfig,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: cssModulesHash,
              minimize: false,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: PATH.postcssConfig,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: cssModulesHash,
              minimize: false,
            },
          },
        ],
      },
    ],
  },
};
