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
  border-width: 1px;\
  overflow: hidden;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
  font: inherit;\
  cursor: pointer;\
  -webkit-appearance: none;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border-color: #9cacc0;\
  border-radius: 5px;\
}\
.d-checkbox > input[type=checkbox]:active {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0f0f0), to(#bfbfbf), color-stop(0.5, #ebebeb), color-stop(0.5, #dedede));\
  background-image: linear-gradient(to bottom, #f0f0f0 0%, #ebebeb 50%, #dedede 50%, #bfbfbf 100%);\
}\
.d-checkbox > input[type=checkbox]:checked {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#7a9de9), to(#2362dd), color-stop(0.5, #366edf), color-stop(0.5, #215fdc));\
  background-image: linear-gradient(to bottom, #7a9de9 0%, #366edf 50%, #215fdc 50%, #2362dd 100%);\
}\
.d-checkbox > input[type=checkbox]:checked::after {\
  content: "\\2714";\
  width: 0.3em;\
  border-color: white;\
}\
.d-checkbox > input[type=checkbox]:checked:active {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#8ea4c1), to(#4a6c9b), color-stop(0.5, #5877a2), color-stop(0.5, #476999));\
  background-image: linear-gradient(to bottom, #8ea4c1 0%, #5877a2 50%, #476999 50%, #4a6c9b 100%);\
}\
.d-checkbox > input[type=checkbox]:disabled {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
}\
'; } );
