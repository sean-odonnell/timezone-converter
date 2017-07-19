module.exports = {
  extends: process.env.NODE_ENV === 'production'
    ? './organization/default.js'
    : './organization/development.js'
}
