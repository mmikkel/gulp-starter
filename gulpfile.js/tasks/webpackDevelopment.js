var config = require('../config')
if(!config.tasks.js) return

var config  = require('../lib/webpack-multi-config')('development')
var gulp    = require('gulp')
var logger  = require('../lib/compileLogger')
var webpack = require('webpack')

var webpackDevelopmentTask = function(callback) {
  var initialCompile = false
  webpack(config).watch(200, function(err, stats) {
    logger(err, stats)
    if(!initialCompile) {
      initialCompile = true
      callback()
    }
  })
}

gulp.task('webpack:development', webpackDevelopmentTask)
module.exports = webpackDevelopmentTask