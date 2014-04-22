/** @module deliteful/CheckBox */
define([
	"dcl/dcl",
	"dojo/on",
	"dojo/dom-class",
	"delite/register",
	"delite/a11yclick",
	"delite/FormValueWidget",
	"./Toggle",
	"delite/handlebars!./CheckBox/CheckBox.html",
	"delite/theme!./CheckBox/themes/{{theme}}/CheckBox_css"
], function (dcl, on, domClass, register, a11yclick, FormValueWidget, Toggle, renderer) {

	/**
	 * A checkbox widget.
	 * @description
	 * A form-aware checkbox widget.
	 * @example
	 * <d-checkbox checked="true"></d-checkbox>
	 * @class module:deliteful/CheckBox
	 * @augments module:deliteful/Toggle
	 */
	return register("d-checkbox", [HTMLElement, FormValueWidget, Toggle], {

		/**
		 * Represents the component css base class.
		 * @member {String}
		 * @default "d-checkbox"
		 */
		baseClass: "d-checkbox",

		buildRendering: renderer,

		postCreate: function () {
			this.own(on(this.focusNode, a11yclick, function () {
				this._set("checked", this.focusNode.checked);
			}.bind(this)));
			// The fact that deliteful/Checkbox is not an HTMLInputElement seems not being compatible with the default
			// "<label for" behavior of the browser. So it needs to explicitly listen to click on associated
			// <label for=...> elements.
			if (this.id) {
				this._lbl4 = this.ownerDocument.querySelector("label[for='" + this.id + "']");
				if (this._lbl4) {
					this.own(on(this._lbl4, "click", this.toggle.bind(this)));
				}
			}
		},

		_onFocus: dcl.superCall(function (sup) {
			return function () {
				// for highcontrast a11y
				if (this._lbl4) {
					domClass.add(this._lbl4, "d-focused-label");
				}
				sup.call(this);
			};
		}),

		_onBlur: dcl.superCall(function (sup) {
			return function () {
				// for highcontrast a11y
				if (this._lbl4) {
					domClass.remove(this._lbl4, "d-focused-label");
				}
				sup.call(this);
			};
		})
	});
});