const { join } = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
};

module.exports = {
  output: {
    path: join(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json',
      path: PATH.dist,
    }),
    new ExtractTextPlugin('css/[contenthash].css', {
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /'.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
    ],
  },
  watch: false,
};
