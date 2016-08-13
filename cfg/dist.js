var path = require('path');
var webpack = require('webpack');
var merge = require('lodash/merge');
var baseConfig = require('./base');
var defaultSettings = require('./defaults');

//Postcss plugins
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var postUrl = require('postcss-url');

var config = merge({
  entry: [
    'babel-polyfill/dist/polyfill.min',
    path.join(__dirname, '../src/index'),
  ],
  devtool: 'eval',
  cache: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'BROWSER': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      minimize: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
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
  resolve: {
    alias: {
      'react-router': defaultSettings.modulePath + '/react-router/umd/ReactRouter.min.js',
      'immutable': defaultSettings.modulePath + '/immutable/dist/immutable.min.js'
    }
  }
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src'),
  exclude: /node_modules/
});

module.exports = config;
