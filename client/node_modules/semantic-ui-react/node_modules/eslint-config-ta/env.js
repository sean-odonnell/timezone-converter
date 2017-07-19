const env = process.env.NODE_ENV || 'development'

module.exports = {
  isDevelopment : function() {
    return env === 'development'
  }
}
