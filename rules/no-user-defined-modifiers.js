/**
 * @fileoverview Disallow user-defined modifiers
 * @author Beau Gunderson <beau@beaugunderson.com>
 */

"use strict";

module.exports = {
	meta: {
		docs: {
			recommended: false,
			type: "error",
			description: "Disallow user-defined modifiers"
		},

		schema: []
	},

	create: function(context) {
		function inspectModifierDeclaration(emitted) {
			var node = emitted.node;

			if (emitted.exit) {
				return;
			}

			context.report({
				node: node,
				message: "User-defined modifiers should be avoided"
			});
		}

		return {
			ModifierDeclaration: inspectModifierDeclaration
		};
	}
};