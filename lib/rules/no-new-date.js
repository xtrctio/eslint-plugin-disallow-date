/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

module.exports = (context) => {
  return {
    'NewExpression': (node) => {
      if (node.type === 'NewExpression' &&
          node.callee.type === 'Identifier' &&
          node.callee.name === 'Date') {
        context.report(node, `Usage of \`${node.callee.name}\` objects is prohibited.`);
      }
    },
    'CallExpression': (node) => {
      if (node.type === 'CallExpression' &&
          node.callee.type === 'Identifier' &&
          node.callee.name === 'Date') {
        context.report(node, `Usage of \`${node.callee.name}\` objects is prohibited.`);
      }
    },
  };
};
