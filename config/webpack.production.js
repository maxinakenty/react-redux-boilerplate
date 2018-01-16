const { join } = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const PATH = {
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
};

module.exports = {
  output: {
    path: join(__dirname, '..', 'dist'),
    publicPath: '/js/',
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json',
      path: PATH.dist,
    }),
  ],
  module: {
    rules: [
      {
        test: /'.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
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
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
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
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  watch: false,
};
