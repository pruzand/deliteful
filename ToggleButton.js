/** @module deliteful/ToggleButton */
define([
	"dcl/dcl",
	"delite/register",
	"dojo/on",
	"dojo/has",
	"delite/a11yclick",
	"./Button",
	"./Toggle",
	"delite/theme!./ToggleButton/themes/{{theme}}/ToggleButton_css"
], function (dcl, register, on, has, a11yclick, Button, Toggle) {

	/**
	 * A toggle button widget.
	 * @description
	 * A form-aware toggle button widget.
	 * @example
	 * <d-toggle-button checked="true"></d-checkbox>
	 * @class module:deliteful/ToggleButton
	 * @augments module:deliteful/Toggle
	 * @augments module:deliteful/Button.Mixin
	 */
	var ToggleButton =  dcl([Button, Toggle], {

		/**
		 * Represents the component css base class.
		 * @member {String}
		 * @default "d-toggle-button"
		 */
		baseClass: "d-toggle-button",

		preCreate: function () {
			this.focusNode = this;
		},

		postCreate: function () {
			this.on(a11yclick, function () {
				this.toggle();
			}.bind(this));
			this.invalidateProperty("checked");
		},

		refreshRendering: dcl.superCall(function (sup) {
			return function (props) {
				sup.apply(this, arguments);
				if (props.checked) {
					this.setAttribute("aria-pressed", "" + this.checked);
				}
			};
		})
	});
	return register("d-toggle-button", [HTMLButtonElement, ToggleButton]);
});