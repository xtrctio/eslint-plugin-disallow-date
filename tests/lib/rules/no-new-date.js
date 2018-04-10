/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

const rule = require('../../../lib/rules/no-new-date');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('no-new-date', rule, {
  valid: [],
  invalid: [
    {
      code: 'new Date();',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'NewExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'new Date("October 13, 2014 11:13:00");',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'NewExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'var d = new Date(100000000000);',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'NewExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'Date();',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'CallExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'const d = Date();',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'CallExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: `window.d = new Date();`,
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'NewExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
  ],
});
