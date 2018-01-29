const os = require('os');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const maxThreads = os.cpus().length - 1;
const happyThreadPool = HappyPack.ThreadPool({
  size: maxThreads,
});

const createHappyPackPlugin = (id, loaders) =>
  new HappyPack({
    id,
    loaders,
    threadPool: happyThreadPool,
    verbose: process.env.HAPPY_VERBOSE === '1',
  });

const extract = options =>
  ExtractTextPlugin.extract(options.fallback, options.use);

module.exports = {
  extract,
  createHappyPackPlugin,
};
