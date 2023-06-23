const webpack = require('webpack');

module.exports = function override(config) {
  // Add a fallback for 'crypto' module
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  };

  // Return the modified config
  return config;
};
