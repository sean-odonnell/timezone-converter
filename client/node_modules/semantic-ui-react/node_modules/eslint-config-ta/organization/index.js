module.exports = {
  'extends': require('../env').isDevelopment()
    ? ['ta/organization/development']
    : ['ta/organization/production'],
}
