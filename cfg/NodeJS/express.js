'use strict';

/**
 * Express configuration
 */
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');
var session = require('cookie-session');
var logger = require('connect-logger');
var cookieParser = require('cookie-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var WebpackConfig = require('../../webpack.config');
var compiler = webpack(WebpackConfig);
var engines = require('consolidate');

module.exports = function(app){
  app.engine('html', engines.mustache);
  app.set('view engine', 'html');

  app.use(compression());
  app.use(cookieParser('telstra-homesite-cookie'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../src/assets')));
  app.use(logger());

  //Server starts from here
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
};
