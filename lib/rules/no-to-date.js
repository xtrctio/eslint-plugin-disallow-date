/**
 * @fileoverview description
 * @author Ryan Skoblenick
 */
'use strict';

module.exports = (context) => {
  return {
    'MemberExpression': (node) => {
      if (node.property.type === 'Identifier' &&
        node.property.name === 'toDate') {
        context.report(node, `Usage of \`.${node.property.name}()\` is prohibited.`);
      }
    },
  };
};
