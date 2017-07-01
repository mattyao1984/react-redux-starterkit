'use strict';

var path = require('path');
var srcPath = path.join(__dirname, '/../src');
var modulePath = path.join(__dirname, '/../node_modules');
var defaultPort = 3000;

function getDefaultModules() {
  return {
    rules: [
      {
        // pre-loader
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: srcPath,
        loader: 'eslint-loader'
      },
      {
        // images
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '8192'
        }
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: '1'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  modulePath: modulePath,
  publicPath: '/assets/',
  port: defaultPort,
  getDefaultModules: getDefaultModules
};
