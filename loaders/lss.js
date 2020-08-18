const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  if (options.main) {
    source = source.replace(/@@main/g, options.main)
  }
  return source;
};
