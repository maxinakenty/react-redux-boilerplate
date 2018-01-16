const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
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
    new webpack.HotModuleReplacementPlugin(),
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
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: join(__dirname, 'postcss.config.js'),
                ctx: {
                  autoprefixer: {
                    browsers: ['last 2 version', '> 5%'],
                  },
                  short: {},
                  cssnano: {},
                },
              },
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: {
      'errors-only': true,
    },
  },
};
