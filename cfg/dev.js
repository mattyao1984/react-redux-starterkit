'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./base');
var defaultSettings = require('./defaults');

//Postcss plugins
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var postUrl = require('postcss-url');

// Add needed plugins here
var config = Object.assign({}, baseConfig, {
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill/dist/polyfill.min',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  cache: true,
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BROWSER': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  module: defaultSettings.getDefaultModules(),
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      autoprefixer,
      precss,
      postUrl
    ];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  }
});

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
