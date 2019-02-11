const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { FAVICON, POSTCSS } = require('./constants');

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
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
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
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
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
