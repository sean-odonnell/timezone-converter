module.exports = {
  'extends': require('../env').isDevelopment()
    ? ['ta/backend/development']
    : ['ta/backend/production'],
}
