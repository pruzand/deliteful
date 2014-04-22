/** @module deliteful/Switch */
define([
	"dcl/dcl",
	"dojo/on",
	"dojo/dom-class",
	"dojo/dom-style",
	"delite/a11yclick",
	"dpointer/events",
	"delite/register",
	"delite/FormValueWidget",
	"deliteful/Toggle",
	"delite/handlebars!./Switch/Switch.html",
	"delite/theme!./Switch/themes/{{theme}}/Switch_css"
], function (dcl, on, domClass, domStyle, a11yclick, pointer, register, FormValueWidget, Toggle, render) {

	/**
	 * A switch widget.
	 * @description
	 * A form-aware switch widget.
	 * @example
	 * <d-switch checkedLabel="ON" uncheckedLabel="OFF" checked="true"></d-checkbox>
	 * @class module:deliteful/Switch
	 * @augments module:deliteful/Toggle
	 */
	return register("d-switch", [HTMLElement, FormValueWidget, Toggle], {

		/**
		 * Represents the label corresponding to the checked state.
		 * @member {String}
		 * @default ""
		 */
		checkedLabel: "",

		/**
		 * Represents the label corresponding to the unchecked state.
		 * @member {String}
		 * @default ""
		 */
		uncheckedLabel: "",

		/**
		 * Represents the component css base class.
		 * @member {String}
		 * @default "d-switch"
		 */
		baseClass: "d-switch",

		_pHandlers: null,

		postCreate: function () {
			this.own(on(this.focusNode, a11yclick, function () {
				this._set("checked", this.focusNode.checked);
			}.bind(this)));
			pointer.setTouchAction(this._knobGlassNode, "none");
			this.own(on(this._knobGlassNode, "pointerdown", this._pointerDownHandler.bind(this)));
		},

		refreshRendering: dcl.superCall(function (sup) {
			return function (props) {
				sup.apply(this, arguments);
				if (props.checked) {
					domClass.toggle(this._pushNode, "d-switch-width", this.checked);
				}
			};
		}),

		attachedCallback: dcl.after(function () {
			this.knobWidth = parseInt(window.getComputedStyle(this._knobNode).width, 10);
			this.switchWidth = parseInt(window.getComputedStyle(this).width, 10);
		}),

		destroy: function () {
			this._cleanHandlers();
		},

		_pointerDownHandler: function (e) {
			this._startX = this._curX = e.clientX;
			pointer.setPointerCapture(this._knobGlassNode, e.pointerId);
			this._pHandlers = [
				on(this._knobGlassNode, "pointermove", this._pointerMoveHandler.bind(this)),
				on(this._knobGlassNode, "pointerup", this._pointerUpHandler.bind(this)),
				on(this._knobGlassNode, "lostpointercapture", this._lostPointerCaptureHandler.bind(this))
			];
			e.preventDefault();
			e.stopPropagation();
		},

		_pointerMoveHandler: function (e) {
			var dx = e.clientX - this._curX,
				tdx = e.clientX - this._startX,
				cs = window.getComputedStyle(this._pushNode),
				w = parseInt(cs.width, 10);
			if (!this._drag && Math.abs(tdx) > 4) {
				this._drag = true;
				domClass.remove(this._innerNode, "-d-switch-transition");
				domClass.remove(this._pushNode, "-d-switch-transition");
				domClass.remove(this._innerWrapperNode, "-d-switch-transition");
			}
			this._curX = e.clientX;
			if (this._drag) {
				var nw = w + dx,
					max = this.checked ? this.switchWidth : this.switchWidth - this.knobWidth,
					min = this.checked ? this.knobWidth : 0;
				nw = Math.max(min, Math.min(max, nw));
				this._pushNode.style.width = nw + "px";
				console.log("width: " + window.getComputedStyle(this._pushNode).width);
			}
			e.preventDefault();
			e.stopPropagation();
		},

		_pointerUpHandler: function (e) {
			if (!this._drag) {
				return;
			}
			this._drag = false;
			var cs = parseInt(window.getComputedStyle(this._pushNode).width, 10);
			var m = parseInt(window.getComputedStyle(this._pushNode).marginLeft, 10);
			if (this.checked) {
				this.checked = cs + m + this.knobWidth / 2 >= this.switchWidth / 2;
			} else {
				this.checked = cs + m + this.knobWidth / 2 >= this.switchWidth / 2;
			}
			e.preventDefault();
			e.stopPropagation();
		},

		_lostPointerCaptureHandler: function () {
			this._cleanHandlers();
			this._drag = false;
			this._pushNode.style.width = "";
			domClass.add(this._innerNode, "-d-switch-transition");
			domClass.add(this._pushNode, "-d-switch-transition");
			domClass.add(this._innerWrapperNode, "-d-switch-transition");
		},

		_cleanHandlers: function () {
			if (this._pHandlers) {
				this._pHandlers.forEach(function (h) {
					h.remove();
				});
			}
			this._pHandlers = null;
		},

		buildRendering: render

	});

})