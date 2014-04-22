define([
	"dcl/dcl",
	"intern!object",
	"intern/chai!assert",
	"delite/register",
	"dojo/dom-class",
	"deliteful/ToggleButton"
], function (dcl, registerSuite, assert, register, domClass, ToggleButton) {

	var container,
		html = "<button is='d-toggle-button' id='cb1'></button><button is='d-toggle-button' id='cb2' value='foo'>" +
			"</button><button is='d-toggle-button' id='cb3' checked></button>";

	var commonSuite = {

		"Default State": function () {
			var cb = document.getElementById("cb1");
			assert.isTrue(domClass.contains(cb, "d-toggle-button"), "Unexpected baseClass.");
			assert.isFalse(cb.checked, "Unexpected default value for 'checked' property.");
			assert.isFalse(cb.disabled, "Unexpected default value for 'disabled' property");

			var cb2 = document.getElementById("cb2");
			assert.equal(cb2.value, "foo",
				"Unexpected default value for 'value' property if 'value' specified/unchecked");
			cb = document.getElementById("cb3");
			assert.ok(cb.checked, "Unexpected default value for 'checked' property if 'checked' specified.");
		},

		"checked": function () {
			var cb1 = document.getElementById("cb1"),
				old = cb1.checked;
			cb1.checked = !old;
			assert.equal(cb1.checked, !old, "Unexpected value for 'checked' property after set.");
		},

		value: function () {
			var cb = document.getElementById("cb1");
			cb.value = "foo";
			assert.equal(cb.value, "foo", "Unexpected value for 'value' attribute.");
		},

		afterEach: function () {
			container.parentNode.removeChild(container);
		}
	};

	// Markup
	var suite = {
		name: "deliteful/ToggleButton: markup",
		beforeEach: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			container.innerHTML = html;
			register.parse();
		}
	};
	dcl.mix(suite, commonSuite);
	registerSuite(suite);

	suite = {
		name: "deliteful/ToggleButton: programmatic",
		beforeEach: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			var cb = new ToggleButton({id: "cb1"});
			container.appendChild(cb);
			cb.startup();
			cb = new ToggleButton({id: "cb2", value: "foo"});
			container.appendChild(cb);
			cb.startup();
			cb = new ToggleButton({id: "cb3", checked: "checked"});
			container.appendChild(cb);
			cb.startup();
		}
	};
	dcl.mix(suite, commonSuite);
	registerSuite(suite);
});