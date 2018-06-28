const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const { cssModulesHash } = require('../package.json');
const { PATH } = require('./constants');

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
    new DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new HotModuleReplacementPlugin(),
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
            },
          },
        ],
      },
    ],
  },
};
