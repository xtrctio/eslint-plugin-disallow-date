/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

module.exports = (context) => {
  return {
    'MemberExpression': (node) => {
      if (node.object.type === 'Identifier' &&
          node.object.name === 'Date') {
        context.report(node, `Usage of \`${node.object.name}\` objects is prohibited.`);
      }
    },
    'VariableDeclarator': (node) => {
      if (node.type === 'VariableDeclarator' &&
          node.init.type === 'Identifier' &&
          node.init.name === 'Date') {
        context.report(node, `Usage of \`${node.init.name}\` objects is prohibited.`);
      }
    },
    'AssignmentExpression': (node) => {
      if (node.type === 'AssignmentExpression' &&
          (node.right.type === 'Identifier' || node.right.type === 'NewExpression') &&
          node.right.name === 'Date') {
        context.report(node, `Usage of \`${node.right.name}\` objects is prohibited.`);
      }
    },
  };
};
