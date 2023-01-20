/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/samosa_platter.jpg */ "./dist/samosa_platter.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: darkslategray;\n    color: #1f2937;\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 2fr 27fr 1fr;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: bottom;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.container.header>.tab {\n    width: 80px;\n    padding: 5px;\n    border: 2px solid #0c4a6e;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.tab[data-selected=\"true\"] {background-color: goldenrod;}\n.tab[data-selected=\"false\"]:hover {background-color:  #ffffff33;}\n.tab:active {backdrop-filter: brightness(1.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: 500px;\n    height: 700px;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: top;\n    background-size: cover;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: black;\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB;;IAEhB,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,aAAa;IACb,gCAAgC;AACpC;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,wDAAwD;IACxD,2BAA2B;IAC3B,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,4BAA4B,2BAA2B,CAAC;AACxD,mCAAmC,4BAA4B,CAAC;AAChE,aAAa,iCAAiC,CAAC;;AAE/C,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,yDAAmD;IACnD,kCAAkC;IAClC,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;;IAE7B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA,qBAAqB,WAAW,CAAC;AACjC,2BAA2B,6BAA6B,CAAC;AACzD;IACI,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,kBAAkB;;IAElB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC;;;mBAGe;IACf,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA,cAAc,gBAAgB,CAAC;AAC/B;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC;;;;mCAI+B;AACnC;AACA,uBAAuB,sBAAsB,CAAC;AAC9C,2BAA2B,0BAA0B,EAAE,eAAe,CAAC;AACvE,yBAAyB,wBAAwB,EAAE,eAAe,CAAC;AACnE,wBAAwB,uBAAuB,EAAE,eAAe,CAAC;AACjE;IACI,yBAAyB;IACzB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,+DAA+D;IAC/D,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA,UAAU,eAAe;;AAEzB;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,IAAI,gBAAgB,CAAC;AACrB,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,wDAAwD;IACxD,wBAAwB;IACxB,sBAAsB;;IAEtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":["body {\n    background-color: darkslategray;\n    color: #1f2937;\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 2fr 27fr 1fr;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: bottom;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.container.header>.tab {\n    width: 80px;\n    padding: 5px;\n    border: 2px solid #0c4a6e;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.tab[data-selected=\"true\"] {background-color: goldenrod;}\n.tab[data-selected=\"false\"]:hover {background-color:  #ffffff33;}\n.tab:active {backdrop-filter: brightness(1.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(\"../dist/samosa_platter.jpg\");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: 500px;\n    height: 700px;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: top;\n    background-size: cover;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: black;\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "element": () => (/* binding */ element)
/* harmony export */ });
// import samosa from './assets/samosa.jpg';

const element = {
    create: function(type, classes, text) {
        let out = document.createElement(type);
        for (let c of classes)
            out.classList.add(c);
        out.textContent = text;
        return out;
    },
    createItem: function(name, desc, price, picUrl) {
        let div = this.create('div', ['card', 'item']);
        let subDiv = this.create('div', ['itemName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['desc'], desc);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['price'], price);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['pic']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";

        div.appendChild(subDiv);
        return div;
    },
    createContact: function(name, position, number, email, picUrl) {
        let div = this.create('div', ['card', 'contact']);
        let subDiv = this.create('div', ['contactName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPosition'], position);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactNumber'], number);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactEmail'], email);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPicture']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";
        div.appendChild(subDiv);
        return div;
    },
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHomeContent)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");


function getHomeContent() {
    console.log('Importing home stuff...');

    const content = [];

    // Title
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'title'], 'Samosa Hut'));

    // Description
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'smaller'], "Samosa Hut is home to the world's best Samosas. Hand crafted with the freshest ingredients, you won't find better Samosas anywhere else!"));

    // Hours
    let div = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card'], '');
    let subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['heading'], 'Hours');
    div.appendChild(subDiv);
    let hoursList = [
        'Sunday: 12am - 4pm',
        'Monday: 10am - 8pm',
        'Teusday: 10am - 8pm',
        'Wednesday: 10am - 8pm',
        'Thursday: 10am - 8pm',
        'Friday: 10am - 10pm',
        'Saturday: 10am - 10pm',
    ];
    for (let i of hoursList)
        div.appendChild(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('li', [], i));
    content.push(div);

    // Location
    div = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card']);
    subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['heading'], 'Location');
    div.appendChild(subDiv);
    subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', [], '9000 Central Ave, Manhattan, New York');
    div.appendChild(subDiv);

    content.push(div);

    return content;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenuContent)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");
/* harmony import */ var _assets_samosa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/samosa.jpg */ "./src/assets/samosa.jpg");
/* harmony import */ var _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/naan.jpg */ "./src/assets/naan.jpg");
/* harmony import */ var _assets_chai_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/chai.jpg */ "./src/assets/chai.jpg");





function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'title'], 'Menu'));

    // Main Dishes
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Main Dishes'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Samosa', 'Filled with potatoes and herbs inside of a cripsy crust','$5', _assets_samosa_jpg__WEBPACK_IMPORTED_MODULE_1__));

    // Sides
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Sides'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Naan', 'Savory flatbread','$2', _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__));

    // Beverages
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Beverages'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Chai', 'A spiced black tea','$4', _assets_chai_jpg__WEBPACK_IMPORTED_MODULE_3__));

    return content;
}

/***/ }),

/***/ "./dist/samosa_platter.jpg":
/*!*********************************!*\
  !*** ./dist/samosa_platter.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "samosa_platter.jpg";

/***/ }),

/***/ "./src/assets/chai.jpg":
/*!*****************************!*\
  !*** ./src/assets/chai.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chai.jpg";

/***/ }),

/***/ "./src/assets/naan.jpg":
/*!*****************************!*\
  !*** ./src/assets/naan.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "naan.jpg";

/***/ }),

/***/ "./src/assets/samosa.jpg":
/*!*******************************!*\
  !*** ./src/assets/samosa.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "samosa.jpg";

/***/ })

/******/ 	});
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



// import getContactContent from './contact.js';


const tabs = {
    home: {id: 'home'},
    menu: {id: 'menu'},
    contact: {id: 'contact'},
};

for (let [key, tab] of Object.entries(tabs)) {
    // Setup nodes
    tab.node = document.getElementById(tab.id);
    // Setup event listeners
    tab.node.addEventListener('click', () => {
        tab.node.dataset.selected = 'true';
        // Unselect other tabs
        Object.entries(tabs).forEach(([key, value]) => {
            if (tab.id != value.id) {
                value.node.dataset.selected = 'false';
            }
        });
        clearContent();
        addContent(tab);
    });
}

const content = {};
content.node = document.getElementById('content');

function clearContent() {
    while (content.node.hasChildNodes())
        content.node.removeChild(content.node.firstChild);
}

function addContent(tab) {
    for (let element of tab.content)
        content.node.appendChild(element);
}


tabs.home.content = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
tabs.menu.content = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
// tabs.contact.content = getContactContent();


// INIT
clearContent();
addContent(tabs.home);

// DEBUG
console.log(tabs);
console.log(content);
console.log(tabs.home.content);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxvQkFBb0Isb0RBQWM7QUFDbEMsb0JBQW9CLG9EQUFjO0FBQ2xDOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZGlzdC9zYW1vc2FfcGxhdHRlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgY29sb3I6ICMxZjI5Mzc7XFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDI3ZnIgMWZyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5oZWFkZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Rpc3QvdmludGFnZV9wYXBlci5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLmhlYWRlcj4udGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBjNGE2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7fVxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwiZmFsc2VcXFwiXTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmYzMzt9XFxuLnRhYjphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxLjI1KTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1haW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIubWFpbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC5tYWluIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAjMDAwMzs7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7d2lkdGg6IDIwcHg7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M2O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggIzAwMDM7O1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIsIDJmciwgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIml0ZW1OYW1lIGl0ZW1OYW1lXFxcIlxcbiAgICAgICAgXFxcImRlc2MgZGVzY1xcXCJcXG4gICAgICAgIFxcXCJwcmljZSBwaWNcXFwiO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5pdGVtPi5pdGVtTmFtZSB7XFxuICAgIGdyaWQtYXJlYTogaXRlbU5hbWU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuLml0ZW0+LmRlc2Mge1xcbiAgICBncmlkLWFyZWE6IGRlc2M7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLml0ZW0+LnByaWNlIHtncmlkLWFyZWE6IHByaWNlO31cXG4uaXRlbT4ucGljIHtcXG4gICAgZ3JpZC1hcmVhOiBwaWM7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImNvbnRhY3ROYW1lIGNvbnRhY3RQaWN0dXJlXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RQb3NpdGlvbiBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0TnVtYmVyIGNvbnRhY3ROdW1iZXJcXFwiXFxuICAgICAgICBcXFwiY29udGFjdEVtYWlsIGNvbnRhY3RFbWFpbFxcXCI7XFxufVxcbi5jb250YWN0Pi5jb250YWN0TmFtZSB7Z3JpZC1hcmVhOiBjb250YWN0TmFtZTt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQb3NpdGlvbiB7Z3JpZC1hcmVhOiBjb250YWN0UG9zaXRpb247IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3ROdW1iZXIge2dyaWQtYXJlYTogY29udGFjdE51bWJlcjsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdEVtYWlsIHtncmlkLWFyZWE6IGNvbnRhY3RFbWFpbDsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdFBpY3R1cmUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRhY3RQaWN0dXJlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL21hbmFnZXJQcm9maWxlLnBuZ1xcXCIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcblxcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zbWFsbGVyIHtmb250LXNpemU6IDE4cHh9XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmxpIHtsaXN0LXN0eWxlOiBub25lO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGb290ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5mb290ZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Rpc3QvdmludGFnZV9wYXBlci5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FB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Q3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbiAgICBjb2xvcjogIzFmMjkzNztcXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMjdmciAxZnI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUb3AgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLmhlYWRlciB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vZGlzdC92aW50YWdlX3BhcGVyLmpwZ1xcXCIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIuaGVhZGVyPi50YWIge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGM0YTZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge2JhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDt9XFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJmYWxzZVxcXCJdOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjMzO31cXG4udGFiOmFjdGl2ZSB7YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDEuMjUpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTWFpbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kaXN0L3NhbW9zYV9wbGF0dGVyLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQubWFpbiB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjMztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggIzAwMDM7O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOiAyMHB4O31cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDt9XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjNjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzOztcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyLCAyZnIsIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJpdGVtTmFtZSBpdGVtTmFtZVxcXCJcXG4gICAgICAgIFxcXCJkZXNjIGRlc2NcXFwiXFxuICAgICAgICBcXFwicHJpY2UgcGljXFxcIjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uaXRlbT4uaXRlbU5hbWUge1xcbiAgICBncmlkLWFyZWE6IGl0ZW1OYW1lO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcbi5pdGVtPi5kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5pdGVtPi5wcmljZSB7Z3JpZC1hcmVhOiBwcmljZTt9XFxuLml0ZW0+LnBpYyB7XFxuICAgIGdyaWQtYXJlYTogcGljO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJjb250YWN0TmFtZSBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0UG9zaXRpb24gY29udGFjdFBpY3R1cmVcXFwiXFxuICAgICAgICBcXFwiY29udGFjdE51bWJlciBjb250YWN0TnVtYmVyXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RFbWFpbCBjb250YWN0RW1haWxcXFwiO1xcbn1cXG4uY29udGFjdD4uY29udGFjdE5hbWUge2dyaWQtYXJlYTogY29udGFjdE5hbWU7fVxcbi5jb250YWN0Pi5jb250YWN0UG9zaXRpb24ge2dyaWQtYXJlYTogY29udGFjdFBvc2l0aW9uOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0TnVtYmVyIHtncmlkLWFyZWE6IGNvbnRhY3ROdW1iZXI7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RFbWFpbCB7Z3JpZC1hcmVhOiBjb250YWN0RW1haWw7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQaWN0dXJlIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250YWN0UGljdHVyZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2Fzc2V0cy9tYW5hZ2VyUHJvZmlsZS5wbmdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG5cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc21hbGxlciB7Zm9udC1zaXplOiAxOHB4fVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7bGlzdC1zdHlsZTogbm9uZTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRm9vdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIuZm9vdGVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kaXN0L3ZpbnRhZ2VfcGFwZXIuanBnXFxcIik7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbmEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHNhbW9zYSBmcm9tICcuL2Fzc2V0cy9zYW1vc2EuanBnJztcblxuY29uc3QgZWxlbWVudCA9IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKHR5cGUsIGNsYXNzZXMsIHRleHQpIHtcbiAgICAgICAgbGV0IG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGZvciAobGV0IGMgb2YgY2xhc3NlcylcbiAgICAgICAgICAgIG91dC5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICBvdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG4gICAgY3JlYXRlSXRlbTogZnVuY3Rpb24obmFtZSwgZGVzYywgcHJpY2UsIHBpY1VybCkge1xuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdpdGVtJ10pO1xuICAgICAgICBsZXQgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnaXRlbU5hbWUnXSwgbmFtZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydkZXNjJ10sIGRlc2MpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsncHJpY2UnXSwgcHJpY2UpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsncGljJ10pO1xuICAgICAgICBzdWJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgcGljVXJsICsgXCInKVwiO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH0sXG4gICAgY3JlYXRlQ29udGFjdDogZnVuY3Rpb24obmFtZSwgcG9zaXRpb24sIG51bWJlciwgZW1haWwsIHBpY1VybCkge1xuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdjb250YWN0J10pO1xuICAgICAgICBsZXQgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdE5hbWUnXSwgbmFtZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0UG9zaXRpb24nXSwgcG9zaXRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdE51bWJlciddLCBudW1iZXIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdEVtYWlsJ10sIGVtYWlsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3RQaWN0dXJlJ10pO1xuICAgICAgICBzdWJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgcGljVXJsICsgXCInKVwiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxufVxuXG5leHBvcnQge2VsZW1lbnR9IiwiaW1wb3J0IHtlbGVtZW50fSBmcm9tICcuL2VsZW1lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb21lQ29udGVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIGhvbWUgc3R1ZmYuLi4nKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAndGl0bGUnXSwgJ1NhbW9zYSBIdXQnKSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3NtYWxsZXInXSwgXCJTYW1vc2EgSHV0IGlzIGhvbWUgdG8gdGhlIHdvcmxkJ3MgYmVzdCBTYW1vc2FzLiBIYW5kIGNyYWZ0ZWQgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIHlvdSB3b24ndCBmaW5kIGJldHRlciBTYW1vc2FzIGFueXdoZXJlIGVsc2UhXCIpKTtcblxuICAgIC8vIEhvdXJzXG4gICAgbGV0IGRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnXSwgJycpO1xuICAgIGxldCBzdWJEaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydoZWFkaW5nJ10sICdIb3VycycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIGxldCBob3Vyc0xpc3QgPSBbXG4gICAgICAgICdTdW5kYXk6IDEyYW0gLSA0cG0nLFxuICAgICAgICAnTW9uZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ1RldXNkYXk6IDEwYW0gLSA4cG0nLFxuICAgICAgICAnV2VkbmVzZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ1RodXJzZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ0ZyaWRheTogMTBhbSAtIDEwcG0nLFxuICAgICAgICAnU2F0dXJkYXk6IDEwYW0gLSAxMHBtJyxcbiAgICBdO1xuICAgIGZvciAobGV0IGkgb2YgaG91cnNMaXN0KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudC5jcmVhdGUoJ2xpJywgW10sIGkpKTtcbiAgICBjb250ZW50LnB1c2goZGl2KTtcblxuICAgIC8vIExvY2F0aW9uXG4gICAgZGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCddKTtcbiAgICBzdWJEaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydoZWFkaW5nJ10sICdMb2NhdGlvbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIHN1YkRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbXSwgJzkwMDAgQ2VudHJhbCBBdmUsIE1hbmhhdHRhbiwgTmV3IFlvcmsnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcblxuICAgIGNvbnRlbnQucHVzaChkaXYpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiaW1wb3J0IHtlbGVtZW50fSBmcm9tICcuL2VsZW1lbnQuanMnO1xuaW1wb3J0IHNhbW9zYUltZyBmcm9tICcuL2Fzc2V0cy9zYW1vc2EuanBnJztcbmltcG9ydCBuYWFuSW1nIGZyb20gJy4vYXNzZXRzL25hYW4uanBnJztcbmltcG9ydCBjaGFpSW1nIGZyb20gJy4vYXNzZXRzL2NoYWkuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVudUNvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ0ltcG9ydGluZyBtZW51IHN0dWZmLi4uJyk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3RpdGxlJ10sICdNZW51JykpO1xuXG4gICAgLy8gTWFpbiBEaXNoZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnTWFpbiBEaXNoZXMnKSk7XG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlSXRlbSgnU2Ftb3NhJywgJ0ZpbGxlZCB3aXRoIHBvdGF0b2VzIGFuZCBoZXJicyBpbnNpZGUgb2YgYSBjcmlwc3kgY3J1c3QnLCckNScsIHNhbW9zYUltZykpO1xuXG4gICAgLy8gU2lkZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnU2lkZXMnKSk7XG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlSXRlbSgnTmFhbicsICdTYXZvcnkgZmxhdGJyZWFkJywnJDInLCBuYWFuSW1nKSk7XG5cbiAgICAvLyBCZXZlcmFnZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnQmV2ZXJhZ2VzJykpO1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUl0ZW0oJ0NoYWknLCAnQSBzcGljZWQgYmxhY2sgdGVhJywnJDQnLCBjaGFpSW1nKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRIb21lQ29udGVudCBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGdldE1lbnVDb250ZW50IGZyb20gJy4vbWVudS5qcyc7XG4vLyBpbXBvcnQgZ2V0Q29udGFjdENvbnRlbnQgZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5jb25zdCB0YWJzID0ge1xuICAgIGhvbWU6IHtpZDogJ2hvbWUnfSxcbiAgICBtZW51OiB7aWQ6ICdtZW51J30sXG4gICAgY29udGFjdDoge2lkOiAnY29udGFjdCd9LFxufTtcblxuZm9yIChsZXQgW2tleSwgdGFiXSBvZiBPYmplY3QuZW50cmllcyh0YWJzKSkge1xuICAgIC8vIFNldHVwIG5vZGVzXG4gICAgdGFiLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIuaWQpO1xuICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRhYi5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWIubm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gJ3RydWUnO1xuICAgICAgICAvLyBVbnNlbGVjdCBvdGhlciB0YWJzXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRhYnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhYi5pZCAhPSB2YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLm5vZGUuZGF0YXNldC5zZWxlY3RlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgYWRkQ29udGVudCh0YWIpO1xuICAgIH0pO1xufVxuXG5jb25zdCBjb250ZW50ID0ge307XG5jb250ZW50Lm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQubm9kZS5oYXNDaGlsZE5vZGVzKCkpXG4gICAgICAgIGNvbnRlbnQubm9kZS5yZW1vdmVDaGlsZChjb250ZW50Lm5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbnRlbnQodGFiKSB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiB0YWIuY29udGVudClcbiAgICAgICAgY29udGVudC5ub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5cbnRhYnMuaG9tZS5jb250ZW50ID0gZ2V0SG9tZUNvbnRlbnQoKTtcbnRhYnMubWVudS5jb250ZW50ID0gZ2V0TWVudUNvbnRlbnQoKTtcbi8vIHRhYnMuY29udGFjdC5jb250ZW50ID0gZ2V0Q29udGFjdENvbnRlbnQoKTtcblxuXG4vLyBJTklUXG5jbGVhckNvbnRlbnQoKTtcbmFkZENvbnRlbnQodGFicy5ob21lKTtcblxuLy8gREVCVUdcbmNvbnNvbGUubG9nKHRhYnMpO1xuY29uc29sZS5sb2coY29udGVudCk7XG5jb25zb2xlLmxvZyh0YWJzLmhvbWUuY29udGVudCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9