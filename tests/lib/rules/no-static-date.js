/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

const rule = require('../../../lib/rules/no-static-date');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('no-static-date', rule, {
  valid: [],
  invalid: [
    {
      code: 'Date.now()',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'MemberExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'Date.parse()',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'MemberExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'Date.UTC()',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'MemberExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: 'let d = Date.UTC()',
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'MemberExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: `let d = Date; d.now();`,
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'VariableDeclarator',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    {
      code: `window.d = Date; d.now();`,
      errors: [{
        message: 'Usage of `Date` objects is prohibited.',
        type: 'AssignmentExpression',
      }],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
  ],
});
