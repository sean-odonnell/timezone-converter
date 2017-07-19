module.exports = {
  'extends': [
    'airbnb/base',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'mocha',
    'flow-vars',
  ],
  'rules': {
    /**
     * Best Practices
     */
    // enforces consistent newlines before or after dots
    'dot-location': [2, 'property'],
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,

    /**
     * Errors
     */
    // avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 0,
    // ensure JSDoc comments are valid
    'valid-jsdoc': [2, {
      'requireParamDescription': true,
      'requireReturn': false,
      'requireReturnDescription': false,
    }],

    /**
     * ES6
     */
    // require space before/after arrow function's arrow
    'arrow-spacing': 2,
    // verify super() callings in constructors
    'constructor-super': 2,
    // disallow modifying variables of class declarations
    'no-class-assign': 2,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 2,

    /**
     * Legacy
     */
    // specify the maximum length of a line in your program
    'max-len': [2, 80, 4],
    // specify the maximum depth that blocks can be nested
    'max-depth': [2, 3],

    /**
     * Mocha Plugin
     */
    // disallow exclusive mocha tests (fixable)
    'mocha/no-exclusive-tests': 2,
    // enforces handling of callbacks for async tests
    'mocha/handle-done-callback': 0,
    // disallow synchronous tests
    'mocha/no-synchronous-tests': 0,
    // disallow global tests
    'mocha/no-global-tests': 2,

    /**
     * Strict
     */
    // require that all functions are run in strict mode
    'strict': [2, 'never'],

    /**
     * Style
     */
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // this option sets a specific tab width for your code
    'indent': [2, 2, {'SwitchCase': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [2, 'prefer-single'],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [2, 2],
    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, {'max': 2}],
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 2,
    // require or disallow padding inside curly braces (fixable)
    'object-curly-spacing': [2, 'never'],
    // require or disallow use of semicolons instead of ASI (fixable)
    'semi': [1, 'never'],

    /**
     * Variables
     */
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, {'vars': 'local', 'args': 'none'}],

    /**
     * Flow-Specific
     */
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,

    /**
     * Best Practices
     */
    'arrow-body-style': [0, 'as-needed'],
    'consistent-return': 2,
    'no-param-reassign': 0, // overrides airbnb rule
    'prefer-template': 0,
  },
}
