delete process.env.BROWSER;
require('core-js/fn/object/assign');

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var WebpackConfig = require('./webpack.config');
var compiler = webpack(WebpackConfig);
var config = require('./cfg/NodeJS');
var extIP = 'localhost';
var app = express();
var env = process.env.REACT_WEBPACK_ENV;

require('./cfg/NodeJS/express')(app);
require('./cfg/NodeJS/routes')(app);

//Server starts from here
if(env != 'dist' && env != 'staging'){
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, '/src/index.html'));
  });

  app.listen(config.port, extIP, function(err){
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at non-production http://' + extIP + ':' + config.port);
  });
}else{
  app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, '/src/index.html'));
  });
  new WebpackDevServer(compiler, WebpackConfig.devServer)
  .listen(WebpackConfig.devServer.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at production http://' + extIP + ':' + WebpackConfig.devServer.port);
  });
}
