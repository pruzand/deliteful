/** @module deliteful/Toggle */
define([
	"dcl/dcl",
	"dojo/on",
	"delite/CssState",
	"delite/Invalidating"
], function (dcl, on, CssState, Invalidating) {

	/**
	 * A mixin for 2-states widgets.
	 * @class module:deliteful/Toggle
	 * @augments module:delite/FormWidget
	 * @augments module:delite/CssState
	 */
	return dcl([CssState, Invalidating], {

		/**
		 * Indicates the state of this widget.
		 * @member {Boolean}
		 * @default false
		 */
		checked: false,

		/**
		 * Represents the widget value that is sent to forms.
		 * @member {String}
		 * @default "on"
		 */
		value: "on",

		preCreate: function () {
			this.addInvalidatingProperties(
				"checked"
			);
		},

		postCreate: function () {
			this.own(on(this.focusNode, "focus", function () { this.focused = true; }.bind(this)));
			this.own(on(this.focusNode, "blur", function () { this.focused = false; }.bind(this)));
		},

		/**
		 * Toggle the state of this widget.
		 * @method
		 */
		toggle: function () {
			if (!this.disabled) {
				this.checked = !this.checked;
			}
		}

	});
});
