/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

const rule = require('../../../lib/rules/no-to-date');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('no-to-date', rule, {
  valid: [],
  invalid: [
    {
      code: 'moment().toDate()',
      errors: [{
        message: 'Usage of `.toDate()` is prohibited.',
        type: 'MemberExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
  ],
});
