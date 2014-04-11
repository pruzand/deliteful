define([
	"dcl/dcl",
	"dojo/on",
	"dojo/dom-class",
	"delite/register",
	"delite/FormWidget",
	"delite/CssState",
	"delite/focus",
	"delite/handlebars!./CheckBox/CheckBox.html",
	"delite/theme!./CheckBox/themes/{{theme}}/CheckBox_css"
], function (dcl, on, domClass, register, FormWidget, CssState, focus, renderer) {

	// summary:
	//		A checkbox widget. The corresponding custom tag is <d-checkbox>.
	return register("d-checkbox", [HTMLElement, FormWidget, CssState], {

		baseClass: "d-checkbox",

		// value: String
		//		Corresponds to the native HTML `<input>` element's attribute. Default value is "on".
		value: "on",

		// checked: String
		//		Corresponds to the native HTML `<input>` element's attribute. Default value is false.
		checked: false,

		buildRendering: renderer,

		postCreate: function () {
			var toggle = function () {
				if (!this.disabled) {
					this.checked = !this.checked;
				}
			}.bind(this);
			this.own(on(this.focusNode, "click", toggle));
			// The fact that deliteful/Checkbox is not an HTMLInputElement seems not being compatible with the default
			// "<label for" behavior of the browser. So it needs to explicitly listen to click on associated
			// <label for=...> elements.
			if (this.id) {
				this.lbl4 = this.ownerDocument.querySelector("label[for='" + this.id + "']");
				if (this.lbl4) {
					this.own(on(this.lbl4, "click", toggle));
				}
			}
		},

		_onFocus: dcl.superCall(function (sup) {
			return function () {
				// for highcontrast a11y
				if (this.lbl4) {
					domClass.add(this.lbl4, "d-focused-label");
				}
				sup.call(this);
			};
		}),

		_onBlur: dcl.superCall(function (sup) {
			return function () {
				// for highcontrast a11y
				if (this.lbl4) {
					domClass.remove(this.lbl4, "d-focused-label");
				}
				sup.call(this);
			};
		})
	});
});