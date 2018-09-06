module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'react-hot-loader/babel',
  ],
};
