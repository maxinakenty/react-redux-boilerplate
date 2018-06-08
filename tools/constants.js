const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = IS_DEVELOPMENT;
