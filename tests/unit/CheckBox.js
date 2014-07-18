define([
	"dcl/dcl",
	"intern!object",
	"intern/chai!assert",
	"delite/register",
	"dojo/dom-class",
	"deliteful/CheckBox"
], function (dcl, registerSuite, assert, register, domClass, CheckBox) {

	var container,
		html = "<d-checkbox id='cb1'></d-checkbox><d-checkbox id='cb2' value='foo'>" +
			"</d-checkbox><d-checkbox id='cb3' checked></d-checkbox>";

	var commonSuite = {

		"Default State": function () {
			var cb = document.getElementById("cb1");
			assert.isTrue(domClass.contains(cb, "d-checkbox"), "Unexpected baseClass.");
			assert.isFalse(cb.checked, "Unexpected default value for 'checked' property.");
			assert.isFalse(cb.disabled, "Unexpected default value for 'disabled' property");
			assert.strictEqual(cb.value, "on", "Unexpected default value for 'value' property");
			var elt = cb.querySelector("input[type='checkbox']");
			assert.ok(elt, "Missing wrapped input element.");

			// verify properties bounds in the template
			assert.equal(cb.name, elt.getAttribute("name"), "Unexpected 'name' attribute value for wrapped input.");
			assert.equal(cb.value, elt.getAttribute("value"), "Unexpected 'value' attribute value for wrapped input.");

			var cb2 = document.getElementById("cb2");
			assert.equal(cb2.value, "foo",
				"Unexpected default value for 'value' property if 'value' specified/unchecked");
			cb = document.getElementById("cb3");
			assert.ok(cb.checked, "Unexpected default value for 'checked' property if 'checked' specified.");
		},

		"checked": function () {
			var cb1 = document.getElementById("cb1"),
				inp = cb1.firstChild,
				old = cb1.checked;
			cb1.checked = !old;
			assert.equal(cb1.checked, !old, "Unexpected value for 'checked' property after set.");
			assert.equal(cb1.checked, inp.checked, "Unexpected value for 'checked' property of wrapped input.");
		},

		value: function () {
			var cb = document.getElementById("cb1");
			cb.value = "foo";
			assert.equal(cb.firstChild.getAttribute("value"), "foo", "Unexpected value for 'value' attribute.");
		},

		afterEach: function () {
			container.parentNode.removeChild(container);
		}
	};

	// Markup
	var suite = {
		name: "deliteful/CheckBox: markup",
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
		name: "deliteful/CheckBox: programmatic",
		beforeEach: function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			var cb = new CheckBox({id: "cb1"});
			container.appendChild(cb);
			cb.startup();
			cb = new CheckBox({id: "cb2", value: "foo"});
			container.appendChild(cb);
			cb.startup();
			cb = new CheckBox({id: "cb3", checked: "checked"});
			container.appendChild(cb);
			cb.startup();
		}
	};
	dcl.mix(suite, commonSuite);
	registerSuite(suite);
});