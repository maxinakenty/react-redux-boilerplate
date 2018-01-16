const { join } = require('path');
const webpack = require('webpack');
module.exports = {
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'eval',
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
        test: /'.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]__[hash:base64:8]',
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
              localIdentName: '[local]__[hash:base64:8]',
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
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]__[hash:base64:8]',
            },
          },
        ],
      },
    ],
  },
};
