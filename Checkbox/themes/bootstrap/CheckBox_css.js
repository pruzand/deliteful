define(function(){ return '\
.d-checkbox {\
  margin-left: 3px;\
  margin-right: 3px;\
  min-height: 20px;\
  margin-top: 10px;\
  margin-bottom: 10px;\
  position: relative;\
  line-height: 10px;\
}\
.d-checkbox.d-focused {\
  outline: thin dotted;\
  outline: 5px auto -webkit-focus-ring-color;\
  outline-offset: -2px;\
}\
.d-checkbox::before {\
  border-color: #b0b0b0;\
  border-style: solid;\
  border-width: 1px;\
  border-radius: 2px;\
  background-image: linear-gradient(to bottom, #ededed 0%, #dedede 100%);\
  height: 10px;\
  width: 10px;\
  overflow: hidden;\
  display: inline-block;\
  position: absolute;\
  top: 0px;\
  content: "";\
}\
.d-checkbox.d-checked::before {\
  content: "\\2714";\
}\
.d-checkbox.d-disabled {\
  color: #545454;\
}\
.d-checkbox.d-disabled::before {\
  border-color: #cfcfcf;\
  background-image: linear-gradient(to bottom, #f6f6f6 0%, #eeeeee 100%);\
  color: #9b9b9b;\
}\
.d-checkbox.d-disabled,\
fieldset[disabled] .d-checkbox {\
  cursor: not-allowed;\
}\
.d-checkbox > input[type=checkbox] {\
  margin: 0px;\
  width: 12px;\
  height: 12px;\
  margin-top: 1px \\9;\
  /* IE8-9 */\
  opacity: 0.01;\
  position: relative;\
  border-style: outset;\
  border-width: 1px;\
  overflow: hidden;\
  font: inherit;\
  cursor: pointer;\
  -webkit-appearance: none;\
  -moz-appearance: none;\
}\
.d-checkbox > input[type=checkbox][disabled],\
fieldset[disabled] .d-checkbox > input[type=checkbox] {\
  cursor: not-allowed;\
}\
'; } );
