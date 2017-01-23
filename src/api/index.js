var env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  require('babel-core/register')
}

exports = module.exports = require('./app')