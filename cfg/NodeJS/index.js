'use strict';

var path = require('path');
var settings = {
  env: process.env.NODE_ENV,
  modules: [
    path.normalize(__dirname),
    'node_modules'
  ],
  // root: path.normalize(__dirname),
  port: process.env.PORT || 9000
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = settings;
