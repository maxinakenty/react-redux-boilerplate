const { DefinePlugin } = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { PUBLIC, FAVICON, POSTCSS } = require('./constants');

module.exports = {
  mode: 'production',
  output: {
    path: PUBLIC,
    publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  performance: {
    hints: false,
  },
  watch: false,
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json',
      path: PUBLIC,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/common.[contenthash].css',
    }),
    new FaviconsWebpackPlugin({
      logo: FAVICON,
      prefix: 'icons/',
      emitStats: false,
      statsFilename: 'iconstats.json',
      background: '#fff',
      persistentCache: true,
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              config: {
                path: POSTCSS,
              },
            },
          },
        ],
      },
    ],
  },
};
