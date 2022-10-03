/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  font-size: 95%;\r\n}\r\n.nav {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgb(0, 0, 0);\r\n}\r\n.nav__inner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  height: 100vh;\r\n}\r\n.nav__inner-back {\r\n  display: flex;\r\n  width: 100%;\r\n  transition: all 250ms ease-in-out;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n}\r\n.nav__inner-item {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  backdrop-filter: blur(500px);\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  box-shadow: 0 0 200px 130px rgb(0 0 0) inset;\r\n}\r\n.nav__inner-ref {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 75%;\r\n  justify-content: center;\r\n}\r\n.nav__inner-reference {\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  font-size: 300%;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  color: aliceblue;\r\n  border-left: 2px solid black;\r\n  border-right: 2px solid black;\r\n  border-radius: 10px;\r\n  transition: all 250ms ease-in-out;\r\n  justify-content: center;\r\n}\r\n.nav__inner-span {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  font-size: 200%;\r\n  top: 35%;\r\n  height: min-content;\r\n  transform: rotate(90deg);\r\n  transition: all 350ms ease-in-out;\r\n  opacity: 0.7;\r\n}\r\n.nav__inner-descr {\r\n  position: absolute;\r\n  display: hidden;\r\n  color: transparent;\r\n  top: 10%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  border-radius: 10px;\r\n  background: rgb(255 255 255 / 8%);\r\n  backdrop-filter: blur(5px);\r\n}\r\n.nav__inner-descr p {\r\n  display: block;\r\n  margin: auto;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  width: 90%;\r\n  height: 90%;\r\n  opacity: 0;\r\n  font-size: 22px;\r\n  line-height: 34px;\r\n  letter-spacing: 1px;\r\n}\r\n.nav__inner-descr:nth-child(2) {\r\n  top: 0%;\r\n  left: 40%;\r\n}\r\ntable {\r\n  display: none;\r\n  margin: auto 1%;\r\n  width: 100%;\r\n  color: rgb(0, 0, 0);\r\n}\r\n.nav__inner-descr-ref {\r\n  display: block;\r\n  width: 100px;\r\n}\r\n.nav__inner-descr-img {\r\n  opacity: 0.8;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\ntd {\r\n  margin: auto;\r\n  width: 100px;\r\n  height: 65px;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\nthead,\r\ntbody {\r\n  margin: 0 auto;\r\n  width: 400px;\r\n}\r\ntbody .nav__inner-descr-img {\r\n  width: 45%;\r\n  height: 45%;\r\n  opacity: 0.8;\r\n}\r\n.contact__inner {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: auto;\r\n  opacity: 0.6;\r\n  align-items: center;\r\n}\r\n.contact__inner-ref {\r\n  position: relative;\r\n  display: block;\r\n  width: 75px;\r\n  height: 45px;\r\n}\r\n.contact__inner-img {\r\n  width: 45px;\r\n  height: 45px;\r\n  margin: auto 0;\r\n}\r\n.nav__inner-ref:hover span {\r\n  opacity: 1;\r\n  top: 5%;\r\n  left: 5%;\r\n  margin-bottom: 100%;\r\n  font-size: 150%;\r\n  transform: rotate(0deg);\r\n}\r\n.nav__inner-ref:hover {\r\n  background: none;\r\n  filter: brightness(145%);\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n.nav__inner-ref:hover .nav__inner-descr {\r\n  display: flex;\r\n  width: 96%;\r\n  height: 48%;\r\n  left: 2%;\r\n  top: 50%;\r\n  color: white;\r\n  justify-content: space-around;\r\n}\r\n.nav__inner-ref:hover .nav__inner-descr p {\r\n  opacity: 1;\r\n}\r\n.nav__inner-ref:hover table {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.nav__inner-ref:hover .contact__inner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.nav__inner-descr-img:hover {\r\n  opacity: 1;\r\n}\r\n.contact__inner-img:hover {\r\n  box-shadow: 0px 0px 10px 15px rgba(255, 255, 255, 0.101),\r\n    0px 0px 2px 5px rgba(255, 255, 255, 0.121) inset;\r\n  border-radius: 50%;\r\n  transition: all 300ms;\r\n}\r\n\r\n@media (max-width: 940px) {\r\n  .nav__inner-descr p {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .nav {\r\n    flex-direction: column;\r\n  }\r\n  .nav__inner {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .nav__inner-back {\r\n    flex-direction: column;\r\n    height: 25%;\r\n    align-items: center;\r\n    margin: 0;\r\n  }\r\n  .nav__inner-item {\r\n    flex-direction: column;\r\n    height: 100%;\r\n  }\r\n  .nav__inner-ref {\r\n    flex-direction: column;\r\n    height: 100%;\r\n    align-items: center;\r\n  }\r\n  .nav__inner-reference {\r\n    height: 100%;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  .nav__inner-span {\r\n    transform: none;\r\n    top: 15%;\r\n    left: 5%;\r\n    font-size: 50px;\r\n  }\r\n  .nav__inner-descr p {\r\n    font-size: 24px;\r\n  }\r\n}\r\n@media (max-width: 450px) {\r\n  .nav__inner {\r\n    width: 100%;\r\n  }\r\n  .nav__inner-span {\r\n    font-size: 30px;\r\n  }\r\n  .nav__inner-descr p {\r\n    font-size: 16px;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about__inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: all 250ms ease-in-out;\r\n}\r\n\r\n.about__inner-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 75%;\r\n  height: 80%;\r\n  border-radius: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.about__inner-photo {\r\n  display: block;\r\n  position: relative;\r\n  border-radius: 20px;\r\n  transition: all 250ms ease-out;\r\n  filter: brightness(0.6) contrast(1);\r\n  margin: 20px;\r\n  padding: 5px;\r\n}\r\n\r\n.about__inner-desc {\r\n  display: block;\r\n  margin: 10px;\r\n  width: 0%;\r\n  text-align: center;\r\n  transition: all 250ms ease-out;\r\n  font-size: 18px;\r\n}\r\n\r\n.about__inner-button-forv {\r\n  opacity: 0.7;\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 64px;\r\n  height: 64px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.about__inner-button-back {\r\n  opacity: 0.7;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  right: 0;\r\n  top: 50%;\r\n  border: none;\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .about__inner-desc {\r\n    font-size: 16px;\r\n  }\r\n  .about__inner-button-forv {\r\n    width: 32px;\r\n    height: 32px;\r\n    background-size: cover;\r\n  }\r\n  .about__inner-button-back {\r\n    width: 32px;\r\n    background-size: cover;\r\n    height: 32px;\r\n  }\r\n  .about__inner-photo {\r\n    width: 100%;\r\n  }\r\n  .about__inner-desc {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
const messages = ['Hello! My name is Dinislam! I like to develop awesome interfaces! 💖', 'Here you can see my projects! 🚀', 'My hobbies and achievements! 😍', 'It is also easy to get in touch with me!😉'];

/***/ }),
/* 14 */
/***/ (function(module) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_801__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/

        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_801__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_801__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_801__.c = installedModules;
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __nested_webpack_require_801__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_801__(0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __nested_webpack_require_2544__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var _initializerJs = __nested_webpack_require_2544__(1);

      var _htmlParserJs = __nested_webpack_require_2544__(3);
      /**
       * Welcome to Typed.js!
       * @param {string} elementId HTML element ID _OR_ HTML element
       * @param {object} options options object
       * @returns {object} a new Typed object
       */


      var Typed = function () {
        function Typed(elementId, options) {
          _classCallCheck(this, Typed); // Initialize it up


          _initializerJs.initializer.load(this, options, elementId); // All systems go!


          this.begin();
        }
        /**
         * Toggle start() and stop() of the Typed instance
         * @public
         */


        _createClass(Typed, [{
          key: 'toggle',
          value: function toggle() {
            this.pause.status ? this.start() : this.stop();
          }
          /**
           * Stop typing / backspacing and enable cursor blinking
           * @public
           */

        }, {
          key: 'stop',
          value: function stop() {
            if (this.typingComplete) return;
            if (this.pause.status) return;
            this.toggleBlinking(true);
            this.pause.status = true;
            this.options.onStop(this.arrayPos, this);
          }
          /**
           * Start typing / backspacing after being stopped
           * @public
           */

        }, {
          key: 'start',
          value: function start() {
            if (this.typingComplete) return;
            if (!this.pause.status) return;
            this.pause.status = false;

            if (this.pause.typewrite) {
              this.typewrite(this.pause.curString, this.pause.curStrPos);
            } else {
              this.backspace(this.pause.curString, this.pause.curStrPos);
            }

            this.options.onStart(this.arrayPos, this);
          }
          /**
           * Destroy this instance of Typed
           * @public
           */

        }, {
          key: 'destroy',
          value: function destroy() {
            this.reset(false);
            this.options.onDestroy(this);
          }
          /**
           * Reset Typed and optionally restarts
           * @param {boolean} restart
           * @public
           */

        }, {
          key: 'reset',
          value: function reset() {
            var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            clearInterval(this.timeout);
            this.replaceText('');

            if (this.cursor && this.cursor.parentNode) {
              this.cursor.parentNode.removeChild(this.cursor);
              this.cursor = null;
            }

            this.strPos = 0;
            this.arrayPos = 0;
            this.curLoop = 0;

            if (restart) {
              this.insertCursor();
              this.options.onReset(this);
              this.begin();
            }
          }
          /**
           * Begins the typing animation
           * @private
           */

        }, {
          key: 'begin',
          value: function begin() {
            var _this = this;

            this.options.onBegin(this);
            this.typingComplete = false;
            this.shuffleStringsIfNeeded(this);
            this.insertCursor();
            if (this.bindInputFocusEvents) this.bindFocusEvents();
            this.timeout = setTimeout(function () {
              // Check if there is some text in the element, if yes start by backspacing the default message
              if (!_this.currentElContent || _this.currentElContent.length === 0) {
                _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
              } else {
                // Start typing
                _this.backspace(_this.currentElContent, _this.currentElContent.length);
              }
            }, this.startDelay);
          }
          /**
           * Called for each character typed
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'typewrite',
          value: function typewrite(curString, curStrPos) {
            var _this2 = this;

            if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
              this.el.classList.remove(this.fadeOutClass);
              if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
            }

            var humanize = this.humanizer(this.typeSpeed);
            var numChars = 1;

            if (this.pause.status === true) {
              this.setPauseStatus(curString, curStrPos, true);
              return;
            } // contain typing function in a timeout humanize'd delay


            this.timeout = setTimeout(function () {
              // skip over any HTML chars
              curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
              var pauseTime = 0;
              var substr = curString.substr(curStrPos); // check for an escape character before a pause value
              // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
              // single ^ are removed from string

              if (substr.charAt(0) === '^') {
                if (/^\^\d+/.test(substr)) {
                  var skip = 1; // skip at least 1

                  substr = /\d+/.exec(substr)[0];
                  skip += substr.length;
                  pauseTime = parseInt(substr);
                  _this2.temporaryPause = true;

                  _this2.options.onTypingPaused(_this2.arrayPos, _this2); // strip out the escape character and pause value so they're not printed


                  curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);

                  _this2.toggleBlinking(true);
                }
              } // check for skip characters formatted as
              // "this is a `string to print NOW` ..."


              if (substr.charAt(0) === '`') {
                while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
                  numChars++;
                  if (curStrPos + numChars > curString.length) break;
                } // strip out the escape characters and append all the string in between


                var stringBeforeSkip = curString.substring(0, curStrPos);
                var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                numChars--;
              } // timeout for any pause after a character


              _this2.timeout = setTimeout(function () {
                // Accounts for blinking while paused
                _this2.toggleBlinking(false); // We're done with this sentence!


                if (curStrPos >= curString.length) {
                  _this2.doneTyping(curString, curStrPos);
                } else {
                  _this2.keepTyping(curString, curStrPos, numChars);
                } // end of character pause


                if (_this2.temporaryPause) {
                  _this2.temporaryPause = false;

                  _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                }
              }, pauseTime); // humanized value for typing
            }, humanize);
          }
          /**
           * Continue to the next string & begin typing
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'keepTyping',
          value: function keepTyping(curString, curStrPos, numChars) {
            // call before functions if applicable
            if (curStrPos === 0) {
              this.toggleBlinking(false);
              this.options.preStringTyped(this.arrayPos, this);
            } // start typing each new char into existing string
            // curString: arg, this.el.html: original text inside element


            curStrPos += numChars;
            var nextString = curString.substr(0, curStrPos);
            this.replaceText(nextString); // loop the function

            this.typewrite(curString, curStrPos);
          }
          /**
           * We're done typing the current string
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'doneTyping',
          value: function doneTyping(curString, curStrPos) {
            var _this3 = this; // fires callback function


            this.options.onStringTyped(this.arrayPos, this);
            this.toggleBlinking(true); // is this the final string

            if (this.arrayPos === this.strings.length - 1) {
              // callback that occurs on the last typed string
              this.complete(); // quit if we wont loop back

              if (this.loop === false || this.curLoop === this.loopCount) {
                return;
              }
            }

            this.timeout = setTimeout(function () {
              _this3.backspace(curString, curStrPos);
            }, this.backDelay);
          }
          /**
           * Backspaces 1 character at a time
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @private
           */

        }, {
          key: 'backspace',
          value: function backspace(curString, curStrPos) {
            var _this4 = this;

            if (this.pause.status === true) {
              this.setPauseStatus(curString, curStrPos, false);
              return;
            }

            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(false);
            var humanize = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4); // replace text with base text + typed characters

              var curStringAtPosition = curString.substr(0, curStrPos);

              _this4.replaceText(curStringAtPosition); // if smartBack is enabled


              if (_this4.smartBackspace) {
                // the remaining part of the current string is equal of the same part of the new string
                var nextString = _this4.strings[_this4.arrayPos + 1];

                if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                  _this4.stopNum = curStrPos;
                } else {
                  _this4.stopNum = 0;
                }
              } // if the number (id of character in current string) is
              // less than the stop number, keep going


              if (curStrPos > _this4.stopNum) {
                // subtract characters one by one
                curStrPos--; // loop the function

                _this4.backspace(curString, curStrPos);
              } else if (curStrPos <= _this4.stopNum) {
                // if the stop number has been reached, increase
                // array position to next string
                _this4.arrayPos++; // When looping, begin at the beginning after backspace complete

                if (_this4.arrayPos === _this4.strings.length) {
                  _this4.arrayPos = 0;

                  _this4.options.onLastStringBackspaced();

                  _this4.shuffleStringsIfNeeded();

                  _this4.begin();
                } else {
                  _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                }
              } // humanized value for typing

            }, humanize);
          }
          /**
           * Full animation is complete
           * @private
           */

        }, {
          key: 'complete',
          value: function complete() {
            this.options.onComplete(this);

            if (this.loop) {
              this.curLoop++;
            } else {
              this.typingComplete = true;
            }
          }
          /**
           * Has the typing been stopped
           * @param {string} curString the current string in the strings array
           * @param {number} curStrPos the current position in the curString
           * @param {boolean} isTyping
           * @private
           */

        }, {
          key: 'setPauseStatus',
          value: function setPauseStatus(curString, curStrPos, isTyping) {
            this.pause.typewrite = isTyping;
            this.pause.curString = curString;
            this.pause.curStrPos = curStrPos;
          }
          /**
           * Toggle the blinking cursor
           * @param {boolean} isBlinking
           * @private
           */

        }, {
          key: 'toggleBlinking',
          value: function toggleBlinking(isBlinking) {
            if (!this.cursor) return; // if in paused state, don't toggle blinking a 2nd time

            if (this.pause.status) return;
            if (this.cursorBlinking === isBlinking) return;
            this.cursorBlinking = isBlinking;

            if (isBlinking) {
              this.cursor.classList.add('typed-cursor--blink');
            } else {
              this.cursor.classList.remove('typed-cursor--blink');
            }
          }
          /**
           * Speed in MS to type
           * @param {number} speed
           * @private
           */

        }, {
          key: 'humanizer',
          value: function humanizer(speed) {
            return Math.round(Math.random() * speed / 2) + speed;
          }
          /**
           * Shuffle the sequence of the strings array
           * @private
           */

        }, {
          key: 'shuffleStringsIfNeeded',
          value: function shuffleStringsIfNeeded() {
            if (!this.shuffle) return;
            this.sequence = this.sequence.sort(function () {
              return Math.random() - 0.5;
            });
          }
          /**
           * Adds a CSS class to fade out current string
           * @private
           */

        }, {
          key: 'initFadeOut',
          value: function initFadeOut() {
            var _this5 = this;

            this.el.className += ' ' + this.fadeOutClass;
            if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
            return setTimeout(function () {
              _this5.arrayPos++;

              _this5.replaceText(''); // Resets current string if end of loop reached


              if (_this5.strings.length > _this5.arrayPos) {
                _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
              } else {
                _this5.typewrite(_this5.strings[0], 0);

                _this5.arrayPos = 0;
              }
            }, this.fadeOutDelay);
          }
          /**
           * Replaces current text in the HTML element
           * depending on element type
           * @param {string} str
           * @private
           */

        }, {
          key: 'replaceText',
          value: function replaceText(str) {
            if (this.attr) {
              this.el.setAttribute(this.attr, str);
            } else {
              if (this.isInput) {
                this.el.value = str;
              } else if (this.contentType === 'html') {
                this.el.innerHTML = str;
              } else {
                this.el.textContent = str;
              }
            }
          }
          /**
           * If using input elements, bind focus in order to
           * start and stop the animation
           * @private
           */

        }, {
          key: 'bindFocusEvents',
          value: function bindFocusEvents() {
            var _this6 = this;

            if (!this.isInput) return;
            this.el.addEventListener('focus', function (e) {
              _this6.stop();
            });
            this.el.addEventListener('blur', function (e) {
              if (_this6.el.value && _this6.el.value.length !== 0) {
                return;
              }

              _this6.start();
            });
          }
          /**
           * On init, insert the cursor element
           * @private
           */

        }, {
          key: 'insertCursor',
          value: function insertCursor() {
            if (!this.showCursor) return;
            if (this.cursor) return;
            this.cursor = document.createElement('span');
            this.cursor.className = 'typed-cursor';
            this.cursor.setAttribute('aria-hidden', true);
            this.cursor.innerHTML = this.cursorChar;
            this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
          }
        }]);

        return Typed;
      }();

      exports['default'] = Typed;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __nested_webpack_require_20860__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          'default': obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var _defaultsJs = __nested_webpack_require_20860__(2);

      var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
      /**
       * Initialize the Typed object
       */


      var Initializer = function () {
        function Initializer() {
          _classCallCheck(this, Initializer);
        }

        _createClass(Initializer, [{
          key: 'load',

          /**
           * Load up defaults & options on the Typed instance
           * @param {Typed} self instance of Typed
           * @param {object} options options object
           * @param {string} elementId HTML element ID _OR_ instance of HTML element
           * @private
           */
          value: function load(self, options, elementId) {
            // chosen element to manipulate text
            if (typeof elementId === 'string') {
              self.el = document.querySelector(elementId);
            } else {
              self.el = elementId;
            }

            self.options = _extends({}, _defaultsJs2['default'], options); // attribute to type into

            self.isInput = self.el.tagName.toLowerCase() === 'input';
            self.attr = self.options.attr;
            self.bindInputFocusEvents = self.options.bindInputFocusEvents; // show cursor

            self.showCursor = self.isInput ? false : self.options.showCursor; // custom cursor

            self.cursorChar = self.options.cursorChar; // Is the cursor blinking

            self.cursorBlinking = true; // text content of element

            self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent; // html or plain text

            self.contentType = self.options.contentType; // typing speed

            self.typeSpeed = self.options.typeSpeed; // add a delay before typing starts

            self.startDelay = self.options.startDelay; // backspacing speed

            self.backSpeed = self.options.backSpeed; // only backspace what doesn't match the previous string

            self.smartBackspace = self.options.smartBackspace; // amount of time to wait before backspacing

            self.backDelay = self.options.backDelay; // Fade out instead of backspace

            self.fadeOut = self.options.fadeOut;
            self.fadeOutClass = self.options.fadeOutClass;
            self.fadeOutDelay = self.options.fadeOutDelay; // variable to check whether typing is currently paused

            self.isPaused = false; // input strings of text

            self.strings = self.options.strings.map(function (s) {
              return s.trim();
            }); // div containing strings

            if (typeof self.options.stringsElement === 'string') {
              self.stringsElement = document.querySelector(self.options.stringsElement);
            } else {
              self.stringsElement = self.options.stringsElement;
            }

            if (self.stringsElement) {
              self.strings = [];
              self.stringsElement.style.display = 'none';
              var strings = Array.prototype.slice.apply(self.stringsElement.children);
              var stringsLength = strings.length;

              if (stringsLength) {
                for (var i = 0; i < stringsLength; i += 1) {
                  var stringEl = strings[i];
                  self.strings.push(stringEl.innerHTML.trim());
                }
              }
            } // character number position of current string


            self.strPos = 0; // current array position

            self.arrayPos = 0; // index of string to stop backspacing on

            self.stopNum = 0; // Looping logic

            self.loop = self.options.loop;
            self.loopCount = self.options.loopCount;
            self.curLoop = 0; // shuffle the strings

            self.shuffle = self.options.shuffle; // the order of strings

            self.sequence = [];
            self.pause = {
              status: false,
              typewrite: true,
              curString: '',
              curStrPos: 0
            }; // When the typing is complete (when not looped)

            self.typingComplete = false; // Set the order in which the strings are typed

            for (var i in self.strings) {
              self.sequence[i] = i;
            } // If there is some text in the element


            self.currentElContent = this.getCurrentElContent(self);
            self.autoInsertCss = self.options.autoInsertCss;
            this.appendAnimationCss(self);
          }
        }, {
          key: 'getCurrentElContent',
          value: function getCurrentElContent(self) {
            var elContent = '';

            if (self.attr) {
              elContent = self.el.getAttribute(self.attr);
            } else if (self.isInput) {
              elContent = self.el.value;
            } else if (self.contentType === 'html') {
              elContent = self.el.innerHTML;
            } else {
              elContent = self.el.textContent;
            }

            return elContent;
          }
        }, {
          key: 'appendAnimationCss',
          value: function appendAnimationCss(self) {
            var cssDataName = 'data-typed-js-css';

            if (!self.autoInsertCss) {
              return;
            }

            if (!self.showCursor && !self.fadeOut) {
              return;
            }

            if (document.querySelector('[' + cssDataName + ']')) {
              return;
            }

            var css = document.createElement('style');
            css.type = 'text/css';
            css.setAttribute(cssDataName, true);
            var innerCss = '';

            if (self.showCursor) {
              innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
            }

            if (self.fadeOut) {
              innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
            }

            if (css.length === 0) {
              return;
            }

            css.innerHTML = innerCss;
            document.body.appendChild(css);
          }
        }]);

        return Initializer;
      }();

      exports['default'] = Initializer;
      var initializer = new Initializer();
      exports.initializer = initializer;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      /**
       * Defaults & options
       * @returns {object} Typed defaults & options
       * @public
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var defaults = {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
        stringsElement: null,

        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 0,

        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 0,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 0,

        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,

        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,

        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 700,

        /**
         * @property {boolean} fadeOut Fade out instead of backspace
         * @property {string} fadeOutClass css class for fade animation
         * @property {boolean} fadeOutDelay Fade out delay in milliseconds
         */
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,

        /**
         * @property {boolean} loop loop strings
         * @property {number} loopCount amount of loops
         */
        loop: false,
        loopCount: Infinity,

        /**
         * @property {boolean} showCursor show cursor
         * @property {string} cursorChar character for cursor
         * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
         */
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,

        /**
         * @property {string} attr attribute for typing
         * Ex: input placeholder, value, or just HTML text
         */
        attr: null,

        /**
         * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
         */
        bindInputFocusEvents: false,

        /**
         * @property {string} contentType 'html' or 'null' for plaintext
         */
        contentType: 'html',

        /**
         * Before it begins typing
         * @param {Typed} self
         */
        onBegin: function onBegin(self) {},

        /**
         * All typing is complete
         * @param {Typed} self
         */
        onComplete: function onComplete(self) {},

        /**
         * Before each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        preStringTyped: function preStringTyped(arrayPos, self) {},

        /**
         * After each string is typed
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStringTyped: function onStringTyped(arrayPos, self) {},

        /**
         * During looping, after last string is typed
         * @param {Typed} self
         */
        onLastStringBackspaced: function onLastStringBackspaced(self) {},

        /**
         * Typing has been stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingPaused: function onTypingPaused(arrayPos, self) {},

        /**
         * Typing has been started after being stopped
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onTypingResumed: function onTypingResumed(arrayPos, self) {},

        /**
         * After reset
         * @param {Typed} self
         */
        onReset: function onReset(self) {},

        /**
         * After stop
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStop: function onStop(arrayPos, self) {},

        /**
         * After start
         * @param {number} arrayPos
         * @param {Typed} self
         */
        onStart: function onStart(arrayPos, self) {},

        /**
         * After destroy
         * @param {Typed} self
         */
        onDestroy: function onDestroy(self) {}
      };
      exports['default'] = defaults;
      module.exports = exports['default'];
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      /**
       * TODO: These methods can probably be combined somehow
       * Parse HTML tags & HTML Characters
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var HTMLParser = function () {
        function HTMLParser() {
          _classCallCheck(this, HTMLParser);
        }

        _createClass(HTMLParser, [{
          key: 'typeHtmlChars',

          /**
           * Type HTML tags & HTML Characters
           * @param {string} curString Current string
           * @param {number} curStrPos Position in current string
           * @param {Typed} self instance of Typed
           * @returns {number} a new string position
           * @private
           */
          value: function typeHtmlChars(curString, curStrPos, self) {
            if (self.contentType !== 'html') return curStrPos;
            var curChar = curString.substr(curStrPos).charAt(0);

            if (curChar === '<' || curChar === '&') {
              var endTag = '';

              if (curChar === '<') {
                endTag = '>';
              } else {
                endTag = ';';
              }

              while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                curStrPos++;

                if (curStrPos + 1 > curString.length) {
                  break;
                }
              }

              curStrPos++;
            }

            return curStrPos;
          }
          /**
           * Backspace HTML tags and HTML Characters
           * @param {string} curString Current string
           * @param {number} curStrPos Position in current string
           * @param {Typed} self instance of Typed
           * @returns {number} a new string position
           * @private
           */

        }, {
          key: 'backSpaceHtmlChars',
          value: function backSpaceHtmlChars(curString, curStrPos, self) {
            if (self.contentType !== 'html') return curStrPos;
            var curChar = curString.substr(curStrPos).charAt(0);

            if (curChar === '>' || curChar === ';') {
              var endTag = '';

              if (curChar === '>') {
                endTag = '<';
              } else {
                endTag = '&';
              }

              while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                curStrPos--;

                if (curStrPos < 0) {
                  break;
                }
              }

              curStrPos--;
            }

            return curStrPos;
          }
        }]);

        return HTMLParser;
      }();

      exports['default'] = HTMLParser;
      var htmlParser = new HTMLParser();
      exports.htmlParser = htmlParser;
      /***/
    }
    /******/
    ])
  );
});

;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);




let typed = 999;
const catalogLi = document.querySelectorAll('.nav__inner-back');
const catalogA = document.querySelectorAll('.nav__inner-reference');
const catalogRef = document.querySelectorAll('.nav__inner-ref');
const buttonBack = document.querySelector('.about__inner-button-forv');
const buttonForv = document.querySelector('.about__inner-button-back');
const offsetWidth = document.body.offsetWidth;

for (let i = 0; i < catalogLi.length; i++) {
  catalogLi[i].style.backgroundImage = `url(./img/${i}.jpg)`;
  catalogA[i].style.backgroundImage = `linear-gradient(160deg, transparent, rgb(0, 0, 0)), url(./img/${i}.jpg)`;

  catalogRef[i].onmouseenter = () => offsetWidth > 800 ? changeWidth(i) : changeHeight(i);

  catalogRef[i].onmouseleave = () => offsetWidth > 800 ? onCommonWidth(i) : onCommonHeight(i);

  buttonForv.addEventListener('click', photoAdd);
  buttonBack.addEventListener('click', photoSub);
}
/**
 * Для экранов больше 800px
 */


function changeWidth(i) {
  if (i === 0) {
    showHideText(1);
  }

  for (let x = 0; x < 4; x++) {
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%';
  }

  document.querySelectorAll('.nav__inner-back')[i].style.width = '275%';

  if (i === 2) {
    aboutFrame.style.height = `80%`;
    aboutFrame.style.top = `18%`;
    onGallery();
  }
}

function onCommonWidth(i) {
  for (let x = 0; x < 4; x++) {
    document.querySelectorAll('.nav__inner-back')[x].style.width = '100%';
  }

  if (i === 0) {
    showHideText(0);
  }

  if (i === 2) {
    onGalleryLaunch = false;
    buttonForv.style.display = 'none';
    buttonBack.style.display = 'none';
  }
}
/**
 * Для экранов меньше 800px
 */


function changeHeight(i) {
  if (i === 0) {
    showHideText(1);
  }

  for (let x = 0; x < 4; x++) {
    document.querySelectorAll('.nav__inner-back')[x].style.height = '9%';
  }

  document.querySelectorAll('.nav__inner-back')[i].style.height = '73%';

  if (i === 2) {
    aboutFrame.style.height = `80%`;
    aboutFrame.style.top = `18%`;
    onGallery();
  }
}

function onCommonHeight(i) {
  for (let x = 0; x < 4; x++) {
    document.querySelectorAll('.nav__inner-back')[x].style.height = '25%';
  }

  if (i === 0) {
    showHideText(0);
  }

  if (i === 2) {
    onGalleryLaunch = false;
    buttonForv.style.display = 'none';
    buttonBack.style.display = 'none';
  }
}
/**
 * Автопечать текста
 */


function showHideText(n) {
  if (n == 1) {
    if (typed == 999) {
      typed = new (typed_js__WEBPACK_IMPORTED_MODULE_3___default())('#info', {
        strings: _constants__WEBPACK_IMPORTED_MODULE_2__.messages,
        typeSpeed: 35,
        // Скорость печати
        backSpeed: 20,
        // Скорость удаления
        startDelay: 400,
        // Задержка перед стартом анимации
        backDelay: 3000,
        // Пауза перед удалением 
        loop: false,
        // Повтор (true или false)
        loopCount: 0,
        // Число повторов, false = бесконечно
        showCursor: true,
        // Отображение курсора
        attr: null,
        onStringTyped: (arrayPos, self) => {
          onlightShadow(arrayPos);
        }
      });
    } else {
      typed.start();
    }
  } else if (n == 0) {
    typed.stop();
    offlightShadow();
  }
}
/**
 * Подсвечивание
 */


function onlightShadow(arrayPos) {
  offlightShadow();

  if (arrayPos != 0) {
    document.querySelectorAll('.nav__inner-reference')[arrayPos].style.boxShadow = '0px 0px 100px 50px inset #546e8e';
  }
}

function offlightShadow() {
  for (let i = 0; i < 4; i++) {
    document.querySelectorAll('.nav__inner-reference')[i].style.boxShadow = 'none';
  }
}
/**
 * Анимация сектора About
 */


const photoArray = ['football.JPG', 'job.JPG', 'master2.jpg', 'student.jpg'];
const textArray = [`I love active sports! Football ⚽ Basketball ⛹️ Hockey 🏒`, 'I worked as a controller software engineer!👷 And I had to code in the harshest conditions! 🥶', 'In 2021, I graduated from the Oil University and has a master\'s degree in automation 💪', 'At the university, I actively participated in the cultural activities of the faculty 🎤'];
const aboutFrame = document.querySelectorAll('.nav__inner-descr')[2];
const photo = document.querySelector('.about__inner-photo');
const text = document.querySelector('.about__inner-desc');
let onGalleryLaunch = false;
let photoNum = 0;

function onGallery() {
  onGalleryLaunch = true;
  buttonForv.style.backgroundImage = `url(./img/right.png)`;
  buttonBack.style.backgroundImage = `url(./img/left.png)`;
  buttonForv.style.display = 'block';
  buttonBack.style.display = 'block';

  if (photoNum === 4) {
    photoNum = 0;
  }

  if (photoNum === -1) {
    photoNum = 3;
  }

  photo.src = `./img/${photoArray[photoNum]}`;
  text.innerHTML = `${textArray[photoNum]}`;

  if (offsetWidth > 800) {
    if (photoNum === 3) {
      photo.style.width = '80%';
      text.style.width = '90%';
    } else if (photoNum === 2) {
      text.style.width = '85%';
      photo.style.width = '65%';
    } else if (photoNum === 1) {
      text.style.width = '90%';
      photo.style.width = '62%';
    } else if (photoNum === 0) {
      text.style.width = '86%';
      photo.style.width = '65%';
    }
  } else if (offsetWidth > 450 && offsetWidth < 800) {
    if (photoNum === 3) {
      photo.style.width = '72%';
      text.style.width = '95%';
    } else if (photoNum === 2) {
      text.style.width = '95%';
      photo.style.width = '60%';
    } else if (photoNum === 1) {
      text.style.width = '75%';
      photo.style.width = '60%';
    } else if (photoNum === 0) {
      text.style.width = '60%';
      photo.style.width = '56%';
    }
  }
}

function photoAdd() {
  photoNum += 1;
  onGallery();
}

function photoSub() {
  photoNum -= 1;
  onGallery();
}
})();

/******/ })()
;