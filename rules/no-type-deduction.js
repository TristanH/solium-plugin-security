/**
 * @fileoverview Disallow type deduction via 'var'
 * @author Beau Gunderson <beau@beaugunderson.com>
 */

"use strict";

module.exports = {
	meta: {
		docs: {
			recommended: false,
			type: "error",
			description: "Disallow type deduction via 'var'"
		},

		schema: []
	},

	create: function(context) {
		function inspectVariableDeclaration(emitted) {
			if (emitted.exit) {
				return;
			}

			var node = emitted.node;

			context.report({
				node: node,
				message: "type deduction is disallowed"
			});
		}

		return {
			VariableDeclaration: inspectVariableDeclaration
		};
	}
};
