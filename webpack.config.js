const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

// var config = getConfig({
//   in: join(__dirname, 'src/app.js'),
//   out: join(__dirname, 'dist'),
//   clearBeforeBuild: true
// })

// alternatively, we can use process.argv[1]
// const isDev = (process.argv[1] || '')
//                .indexOf('hjs-dev-server') !== -1;

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})

module.exports = config;