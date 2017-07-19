module.exports = {
  'extends': require('../env').isDevelopment()
    ? ['ta/frontend/development']
    : ['ta/frontend/production'],
}
