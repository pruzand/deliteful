define(function(){ return '\
.d-checkbox {\
  margin-left: 3px;\
  margin-right: 3px;\
}\
.d-checkbox > input[type=checkbox] {\
  position: relative;\
  margin: 0px;\
  width: 1em;\
  height: 1em;\
  border-style: outset;\
  overflow: hidden;\
  background-color: #333333;\
  border-style: none;\
  border-top-style: solid;\
  border-top-color: rgba(85, 85, 85, 0.9);\
  border-top-width: 1px;\
  border-radius: 2px;\
  font: inherit;\
  cursor: pointer;\
  -webkit-appearance: none;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border-color: #5c5c5c;\
  border-width: 1px;\
  background-color: transparent;\
  background-image: none;\
  border-style: solid;\
}\
.d-checkbox > input[type=checkbox]:active {\
  background-image: none;\
}\
.d-checkbox > input[type=checkbox]:checked {\
  background-color: transparent;\
}\
.d-checkbox > input[type=checkbox]:checked::after {\
  content: "\\2714";\
  width: 0.3em;\
  border-color: white;\
  background-color: transparent;\
  background-image: none;\
  -webkit-transform: translateY(0.45em);\
  transform: translateY(0.45em);\
}\
.d-checkbox > input[type=checkbox]:checked:active {\
  background-image: none;\
}\
.d-checkbox > input[type=checkbox]:checked:active::after {\
  background-color: transparent;\
  background-image: none;\
}\
.d-checkbox > input[type=checkbox]:disabled {\
  background-image: none;\
  background-color: #333333;\
  border-style: none;\
  border-top-style: solid;\
  border-top-color: rgba(85, 85, 85, 0.9);\
  border-top-width: 1px;\
  border-radius: 2px;\
}\
'; } );
