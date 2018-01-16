module.exports = ({ options, env }) => ({
  plugins: {
    autoprefixer: options.autoprefixer,
    'postcss-short': options.short,
    cssnano: env === 'production' ? options.cssnano : false,
  },
});
