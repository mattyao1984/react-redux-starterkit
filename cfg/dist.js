var path = require('path');
var webpack = require('webpack');
var merge = require('lodash/merge');
var baseConfig = require('./base');
var defaultSettings = require('./defaults');

var config = merge({
  entry: {
    app: path.join(__dirname, '../src/index'),
    vendor: ['react']
  },
  devtool: 'cheap-module-source-map',
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
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: defaultSettings.getDefaultModules()
}, baseConfig);

config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: ['babel-loader'],
  include: path.join(__dirname, '/../src'),
  exclude: /node_modules/
});

module.exports = config;
