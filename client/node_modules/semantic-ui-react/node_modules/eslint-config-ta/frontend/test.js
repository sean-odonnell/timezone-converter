module.exports = {
  'extends': [
    'ta/frontend/_base',
  ],
  'env': {
    'node': true,
    'mocha': true,
  },
  'globals': {
    'sinon': false,
    'expect': false,
    'should': false,
  },
  'rules': {
    /**
     * Style
     */
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
  },
}
