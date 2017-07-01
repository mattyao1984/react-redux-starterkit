'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./base');
var defaultSettings = require('./defaults');

// Add needed plugins here
var config = Object.assign({}, baseConfig, {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './src/index',
    ],
    vendor: ['react']
  },
  cache: true,
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BROWSER': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: [
    'react-hot-loader',
    'babel-loader'
  ],
  include: path.join(__dirname, '/../src')
});

module.exports = config;
