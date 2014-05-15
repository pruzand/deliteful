define(function () {
	/* jshint multistr: true */
	/* jshint -W015 */
	/* jshint -W033 */
	return "\
.d-switch {\
  display: inline-block;\
  font-size: 0.9em;\
  position: relative;\
  overflow: hidden;\
  box-shadow: 0 0px 3px black;\
  white-space: nowrap;\
}\
.d-switch.d-focused {\
  outline: thin dotted;\
  outline: 5px auto -webkit-focus-ring-color;\
  outline-offset: -2px;\
}\
.-d-switch-inner {\
  position: absolute;\
  width: 30px;\
  top: 0;\
  border-width: 0px;\
}\
.-d-switch-on {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#2859b1), to(#75acfb), color-stop(0.5, #3f84eb), color-stop(0.5, #4c8eee));\
  background-image: linear-gradient(to bottom, #2859b1 0%, #3f84eb 50%, #4c8eee 50%, #75acfb 100%);\
  color: white;\
  font-weight: bold;\
  right: 50%;\
  text-align: center;\
}\
.-d-switch-off {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#cecece), to(#fdfdfd), color-stop(0.5, #eeeeee), color-stop(0.5, #f8f8f8));\
  background-image: linear-gradient(to bottom, #cecece 0%, #eeeeee 50%, #f8f8f8 50%, #fdfdfd 100%);\
  color: #7f7f7f;\
  font-weight: bold;\
  left: 50%;\
  text-align: center;\
}\
.-d-switch-knob {\
  width: 30px;\
  left: 50%;\
  margin-left: -15px;\
  z-index: 5;\
  box-shadow: 0 1px 6px black;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#cccccc), to(#fafafa));\
  background-image: linear-gradient(to bottom, #cccccc 0%, #fafafa 100%);\
}\
.-d-switch-knobglass {\
  display: inline-block;\
  position: absolute;\
  width: 30px;\
  height: 100%;\
  z-index: 10;\
}\
.-d-switch-block {\
  display: inline-block;\
  position: absolute;\
  top: 0;\
  border-width: 0px;\
}\
.-d-switch-inner-wrapper {\
  position: relative;\
  display: inline-block;\
}\
.-d-switch-push {\
  display: inline-block;\
  width: 0;\
  margin-left: 0px;\
}\
.-d-switch-input {\
  position: absolute;\
  opacity: 0;\
  z-index: 1;\
  height: 100%;\
  margin: 0px;\
}\
.-d-switch-input:checked + .-d-switch-push {\
  margin-left: -30px;\
}\
.-d-switch-transition {\
  -webkit-transition: margin-left 100ms ease-in, width 100ms ease-in;\
  transition: margin-left 100ms ease-in, width 100ms ease-in;\
}\
.d-switch-width {\
  width: 70px;\
}\
.d-switch-rounded {\
  border-radius: 15px;\
}";
});