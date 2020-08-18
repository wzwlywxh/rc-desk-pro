const webpackConfigCreator = require('./webpack.config');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const config = {
  plugins: [
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
}

const options = {
  mode: "production"
}

module.exports = merge(webpackConfigCreator(options), config);
