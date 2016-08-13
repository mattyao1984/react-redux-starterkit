//Flag for server side render
delete process.env.BROWSER;

var path = require('path');
var express = require('express');
var config = require('./cfg/NodeJS');
var app = express();

require('./cfg/NodeJS/express')(app);
require('./cfg/NodeJS/routes')(app);

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

var ip = (process.env.REACT_WEBPACK_ENV == 'dev') ? 'localhost' : 'localhost';
app.listen(config.port, ip, function(err){
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + ip + ':' + config.port);
});
