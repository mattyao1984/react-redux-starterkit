'use strict';

var path = require('path');
var defaultSettings = require('./defaults');
var additionalPaths = [];

process.traceDeprecation = true;
// process.noDeprecation = true

module.exports = {
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'bundle.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    compress: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: defaultSettings.srcPath + '/actions/',
      components: defaultSettings.srcPath + '/components/',
      sources: defaultSettings.srcPath + '/sources/',
      stores: defaultSettings.srcPath + '/stores/',
      styles: defaultSettings.srcPath + '/styles/',
      config: defaultSettings.srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
