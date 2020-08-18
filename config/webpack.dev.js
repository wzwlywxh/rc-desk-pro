const webpackConfigCreator = require('./webpack.config');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  devServer: {
    contentBase: path.join(__dirname, "../public")
  }
}

const options = {
  mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);
