define(function () {
	/* jshint multistr: true */
	/* jshint -W015 */
	/* jshint -W033 */
	return "\
.d-checkbox {\
  position: relative;\
  margin: -0.5em 3px 0.3em 4px;\
}\
.d-checkbox.d-focused {\
  outline: thin dotted;\
  outline: 5px auto -webkit-focus-ring-color;\
  outline-offset: -2px;\
}\
.d-checkbox::before {\
  overflow: hidden;\
  display: inline-block;\
  position: absolute;\
  top: 0px;\
  content: \"\";\
  border-color: #5c5c5c;\
  border-style: solid;\
  border-width: 1px;\
  border-radius: 0px;\
  background-color: transparent;\
  background-image: none;\
  height: 1em;\
  width: 1em;\
}\
.d-checkbox.d-rtl::before {\
  right: 0px;\
}\
.d-checkbox.d-checked::before {\
  content: \"\\2714\";\
  color: #61c6eb;\
  background-color: transparent;\
  background-image: none;\
}\
.d-checkbox:active::before {\
  border-color: #99bbca;\
  box-shadow: 0px 0px 1px 4px #1f5366;\
  background-color: #1f5366;\
}\
.d-checkbox.d-disabled {\
  color: #333333;\
}\
.d-checkbox.d-disabled::before {\
  color: #333333;\
  background-image: linear-gradient(to bottom, #f6f6f6 0%, #eeeeee 100%);\
}\
.d-checkbox.d-disabled,\
fieldset[disabled] .d-checkbox {\
  cursor: not-allowed;\
}\
.d-checkbox > input[type=checkbox] {\
  width: 1em;\
  height: 1em;\
  margin: 0px;\
  opacity: 0.01;\
  position: relative;\
  overflow: hidden;\
  font: inherit;\
  cursor: pointer;\
  -webkit-appearance: none;\
  -moz-appearance: none;\
}\
.d-checkbox > input[type=checkbox][disabled],\
fieldset[disabled] .d-checkbox > input[type=checkbox] {\
  cursor: not-allowed;\
}";
});
