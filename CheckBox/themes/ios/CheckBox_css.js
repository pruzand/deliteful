define(function () {
	/* jshint multistr: true */
	/* jshint -W015 */
	/* jshint -W033 */
	return "\
.d-checkbox {\
  position: relative;\
  margin-left: 3px;\
  margin-right: 3px;\
  margin-top: 10px;\
  margin-bottom: 10px;\
  border-color: #9cacc0;\
  border-radius: 5px;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
}\
.d-checkbox::before {\
  overflow: hidden;\
  display: inline-block;\
  position: absolute;\
  top: 0px;\
  content: \"\";\
  border-color: #b0b0b0;\
  border-style: solid;\
  border-width: 1px;\
  border-radius: 2px;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
  height: 10px;\
  width: 10px;\
}\
.d-checkbox.d-rtl::before {\
  right: 0px;\
}\
.d-checkbox.d-checked::before {\
  content: \"\\2714\";\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#7a9de9), to(#2362dd), color-stop(0.5, #366edf), color-stop(0.5, #215fdc));\
  background-image: linear-gradient(to bottom, #7a9de9 0%, #366edf 50%, #215fdc 50%, #2362dd 100%);\
  color: white;\
}\
.d-checkbox:active::before {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#8ea4c1), to(#4a6c9b), color-stop(0.5, #5877a2), color-stop(0.5, #476999));\
  background-image: linear-gradient(to bottom, #8ea4c1 0%, #5877a2 50%, #476999 50%, #4a6c9b 100%);\
}\
.d-checkbox.d-disabled {\
  color: #545454;\
}\
.d-checkbox.d-disabled::before {\
  border-color: #cfcfcf;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
  color: #9b9b9b;\
}\
.d-checkbox.d-disabled,\
fieldset[disabled] .d-checkbox {\
  cursor: not-allowed;\
}\
.d-checkbox > input[type=checkbox] {\
  width: 12px;\
  height: 12px;\
  margin: 0px;\
  margin-top: 1px \\9;\
  /* IE8-9 */\
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
