/*! brown-university-react-dates v0.1.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("styled-components"), require("moment"), require("react-dates"), require("brown-university-styles"), require("react-testing-library"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "styled-components", "moment", "react-dates", "brown-university-styles", "react-testing-library"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react"), require("styled-components"), require("moment"), require("react-dates"), require("brown-university-styles"), require("react-testing-library")) : factory(root["prop-types"], root["react"], root["styled-components"], root["moment"], root["react-dates"], root["brown-university-styles"], root["react-testing-library"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SingleDatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleDatePicker", function() { return _components_SingleDatePicker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _test_utils_single_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleDatePickerTestUtils", function() { return _test_utils_single_date_picker__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/*
  css mixins
*/

var inputCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["box-sizing:border-box;color:", ";display:block;font-family:", ";font-size:", ";padding:8px;width:100%;&[type=\"text\"]{padding-top:9px;padding-bottom:7px;padding-left:10px;}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mediumGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sans, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["getRems"])(16));
/*
  inner components
*/

var MobileInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "SingleDatePicker__MobileInput",
  componentId: "sc-7ojo1s-0"
})(["", ""], inputCSS);
var DesktopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SingleDatePicker__DesktopWrapper",
  componentId: "sc-7ojo1s-1"
})([".SingleDatePicker,.SingleDatePickerInput,.DateInput{width:100%;}.DateInput_input{", " &::before,&::after{display:none;}}.DateInput_input__focused{border-bottom:2px solid transparent;}.DayPickerNavigation_button{border:1px solid ", ";border-radius:3px;line-height:0.78;padding:6px 9px;position:absolute;top:18px;#chevron-left,#chevron-right{fill:", ";}&:first-of-type{left:22px;}&:last-of-type{right:22px;}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";}.DayPicker_weekHeader{& small{color:", ";font-family:", ";font-size:", ";}}.CalendarDay__default{border:none;color:", ";font-family:", ";font-weight:bold;}.CalendarDay__blocked_out_of_range{color:", ";}.CalendarDay__selected{background-color:", ";border-radius:20px;color:", ";}.CalendarDay__highlighted_calendar{&:not(.CalendarDay__blocked_out_of_range,.CalendarDay__selected){background-color:rgba(255,199,44,0.65);&:hover{background-color:", ";}}}.CalendarDay__blocked_calendar{&:not(.CalendarDay__blocked_out_of_range){color:", ";background-color:", ";}}.DayPickerKeyboardShortcuts_show::before{border-right:33px solid ", ";}.DayPickerKeyboardShortcuts_title{font-family:", ";}.KeyboardShortcutRow{margin-bottom:12px;}.KeyboardShortcutRow_keyContainer{display:inline;margin-right:6px;}.KeyboardShortcutRow_key{background:", ";padding:2px 6px;}.KeyboardShortcutRow_action{display:inline;font-family:", ";}"], inputCSS, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGray, function (_ref) {
  var color = _ref.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sansBold, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["getRems"])(18), brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].black, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sansBold, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["getRems"])(12), brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].black, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sans, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mediumGray, function (_ref3) {
  var color = _ref3.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].white, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].gold, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mediumGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].transparentBlack, function (_ref4) {
  var color = _ref4.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sansBold, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sans);
/*
  outer SingleDatePicker component
*/

var SingleDatePicker = function SingleDatePicker(_ref5) {
  var color = _ref5.color,
      mobileBreakpoint = _ref5.mobileBreakpoint,
      numberOfMonths = _ref5.numberOfMonths,
      placeholder = _ref5.placeholder,
      id = _ref5.id,
      date = _ref5.date,
      onDateChange = _ref5.onDateChange,
      restProps = _objectWithoutProperties(_ref5, ["color", "mobileBreakpoint", "numberOfMonths", "placeholder", "id", "date", "onDateChange"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fns__WEBPACK_IMPORTED_MODULE_5__["WindowSize"], {
    render: function render(_ref6) {
      var width = _ref6.width;
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        var mobileDateFormat = "YYYY-MM-DD";
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileInput, {
          type: "date",
          id: id,
          value: date ? date.format(mobileDateFormat) : "",
          onChange: function onChange(e) {
            if (e.target.value) {
              onDateChange(moment__WEBPACK_IMPORTED_MODULE_3___default()(e.target.value, mobileDateFormat));
            } else {
              onDateChange(null);
            }
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DesktopWrapper, {
        color: color
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["SingleDatePicker"], _extends({
        navPrev: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        navNext: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        numberOfMonths: numberOfMonths,
        placeholder: placeholder,
        id: id,
        date: date,
        onDateChange: onDateChange
      }, restProps)));
    }
  });
};

SingleDatePicker.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "emerald", "skyBlue", "navy", "idRed"]),
  mobileBreakpoint: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  numberOfMonths: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // react-dates...
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({}),
  onDateChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
} : undefined;
SingleDatePicker.defaultProps = {
  color: "red",
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].md,
  numberOfMonths: 1,
  placeholder: "mm/dd/yyyy",
  // react-dates...
  id: null,
  date: null,
  onDateChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (SingleDatePicker);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotion", function() { return DeviceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDeviceMotion", function() { return withDeviceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientation", function() { return DeviceOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDeviceOrientation", function() { return withDeviceOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNetwork", function() { return withNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoPosition", function() { return GeoPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGeoPosition", function() { return withGeoPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowSize", function() { return WindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWindowSize", function() { return withWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locales", function() { return Locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLocales", function() { return withLocales; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var isEmptyChildren = function (children) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) === 0;
};

function throttle(func, wait) {
    var timeout = null;
    var callbackArgs = null;
    var context = this;
    var later = function () {
        func.apply(context, callbackArgs);
        timeout = null;
    };
    return function () {
        if (!timeout) {
            callbackArgs = arguments;
            timeout = setTimeout(later, wait);
        }
    };
}

var supportsPassiveListener = false;
var noop = function () { };
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassiveListener = true;
        },
    });
    window.addEventListener('testPassive', noop, opts);
    window.removeEventListener('testPassive', noop, opts);
}
catch (e) { }

var Scroll = (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { x: 0, y: 0 };
        _this.handleWindowScroll = throttle(function () {
            _this.setState({ x: window.scrollX, y: window.scrollY });
        }, _this.props.throttle);
        return _this;
    }
    Scroll.prototype.componentDidMount = function () {
        this.handleWindowScroll();
        window.addEventListener('scroll', this.handleWindowScroll, supportsPassiveListener ? { passive: true } : false);
    };
    Scroll.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleWindowScroll);
    };
    Scroll.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    Scroll.defaultProps = {
        throttle: 100,
    };
    return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true,
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
};
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
var getOwnPropertyNames = Object.getOwnPropertyNames;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] &&
                !KNOWN_STATICS[key] &&
                (!blacklist || !blacklist[key])) {
                if (propIsEnumerable.call(sourceComponent, key) ||
                    typeof sourceComponent[key] === 'function') {
                    try {
                        targetComponent[key] = sourceComponent[key];
                    }
                    catch (e) { }
                }
            }
        }
        return targetComponent;
    }
    return targetComponent;
}

function withScroll(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Scroll, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var DeviceMotion = (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            acceleration: {
                x: null,
                y: null,
                z: null,
            },
            accelerationIncludingGravity: {
                x: null,
                y: null,
                z: null,
            },
            rotationRate: {
                alpha: null,
                beta: null,
                gamma: null,
            },
            interval: 0,
        };
        _this.handleDeviceMotion = function (e) {
            _this.setState({
                acceleration: e.acceleration,
                accelerationIncludingGravity: e.accelerationIncludingGravity,
                rotationRate: e.rotationRate,
                interval: e.interval,
            });
        };
        return _this;
    }
    DeviceMotion.prototype.componentDidMount = function () {
        window.addEventListener('devicemotion', this.handleDeviceMotion, true);
    };
    DeviceMotion.prototype.componentWillUnmount = function () {
        window.removeEventListener('devicemotion', this.handleDeviceMotion);
    };
    DeviceMotion.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return DeviceMotion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withDeviceMotion(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DeviceMotion, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var DeviceOrientation = (function (_super) {
    __extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            alpha: null,
            beta: null,
            gamma: null,
            absolute: false,
        };
        _this.handleDeviceOrientation = function (e) {
            _this.setState({
                beta: e.beta,
                alpha: e.alpha,
                gamma: e.gamma,
                absolute: e.absolute,
            });
        };
        return _this;
    }
    DeviceOrientation.prototype.componentDidMount = function () {
        window.addEventListener('deviceorientation', this.handleDeviceOrientation, true);
    };
    DeviceOrientation.prototype.componentWillUnmount = function () {
        window.removeEventListener('deviceorientation', this.handleDeviceOrientation);
    };
    DeviceOrientation.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return DeviceOrientation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withDeviceOrientation(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DeviceOrientation, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { online: navigator.onLine };
        _this.handleOnline = function () {
            _this.setState({ online: true, offlineAt: undefined });
        };
        _this.handleOffline = function () {
            _this.setState({ online: false, offlineAt: new Date() });
        };
        return _this;
    }
    Network.prototype.componentDidMount = function () {
        if (typeof window !== 'undefined' && navigator) {
            this.setState({ online: navigator.onLine });
        }
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
    };
    Network.prototype.componentWillUnmount = function () {
        window.removeEventListener('online', this.handleOnline);
        window.removeEventListener('offline', this.handleOffline);
    };
    Network.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return Network;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withNetwork(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Network, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var GeoPosition = (function (_super) {
    __extends(GeoPosition, _super);
    function GeoPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoading: true,
        };
        _this.requestGeo = function () {
            _this.setState({ isLoading: true });
            _this.geoId = navigator.geolocation.watchPosition(function (position) {
                return _this.setState({
                    isLoading: false,
                    coords: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    error: undefined,
                });
            }, function (error) { return _this.setState({ error: error, isLoading: false }); });
        };
        return _this;
    }
    GeoPosition.prototype.componentDidMount = function () {
        this.requestGeo();
    };
    GeoPosition.prototype.componentWillUnmount = function () {
        navigator.geolocation.clearWatch(this.geoId);
    };
    GeoPosition.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return GeoPosition;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withGeoPosition(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GeoPosition, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var M = __webpack_require__(8);
var Media = M;

var WindowSize = (function (_super) {
    __extends(WindowSize, _super);
    function WindowSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { width: 0, height: 0 };
        _this.handleWindowSize = throttle(function () {
            _this.setState({ width: window.innerWidth, height: window.innerHeight });
        }, _this.props.throttle);
        return _this;
    }
    WindowSize.prototype.componentDidMount = function () {
        this.handleWindowSize();
        window.addEventListener('resize', this.handleWindowSize);
    };
    WindowSize.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleWindowSize);
    };
    WindowSize.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    WindowSize.defaultProps = {
        throttle: 100,
    };
    return WindowSize;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withWindowSize(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WindowSize, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var Locales = (function (_super) {
    __extends(Locales, _super);
    function Locales() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { locale: _this.preferredLocales() };
        _this.handleLanguageChange = function () {
            _this.setState({
                locale: _this.preferredLocales(),
            });
        };
        return _this;
    }
    Locales.prototype.preferredLocales = function () {
        if (navigator.languages && navigator.languages.length > 0) {
            return Intl.getCanonicalLocales(navigator.languages)[0];
        }
        return Intl.getCanonicalLocales([navigator.language])[0];
    };
    Locales.prototype.componentDidMount = function () {
        window.addEventListener('languagechange', this.handleLanguageChange);
    };
    Locales.prototype.componentWillUnmount = function () {
        window.removeEventListener('languagechange', this.handleLanguageChange);
    };
    Locales.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return Locales;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withLocales(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Locales, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}


//# sourceMappingURL=index.es6.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(json2mq__WEBPACK_IMPORTED_MODULE_6__);








var MediaQueryList =
/*#__PURE__*/
function () {
  function MediaQueryList(targetWindow, query, listener) {
    var _this = this;

    this.nativeMediaQueryList = targetWindow.matchMedia(query);
    this.active = true; // Safari doesn't clear up listener with removeListener
    // when the listener is already waiting in the event queue.
    // Having an active flag to make sure the listener is not called
    // after we removeListener.

    this.cancellableListener = function () {
      _this.matches = _this.nativeMediaQueryList.matches;

      if (_this.active) {
        listener.apply(void 0, arguments);
      }
    };

    this.nativeMediaQueryList.addListener(this.cancellableListener);
    this.matches = this.nativeMediaQueryList.matches;
  }

  var _proto = MediaQueryList.prototype;

  _proto.cancel = function cancel() {
    this.active = false;
    this.nativeMediaQueryList.removeListener(this.cancellableListener);
  };

  return MediaQueryList;
}();

/**
 * Conditionally renders based on whether or not a media query matches.
 */

var Media =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Media, _React$Component);

  function Media() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), "state", {
      matches: _this.props.defaultMatches
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), "updateMatches", function () {
      var matches = _this.mediaQueryList.matches;

      _this.setState({
        matches: matches
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(matches);
      }
    });

    return _this;
  }

  var _proto = Media.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (typeof window !== 'object') return;
    var targetWindow = this.props.targetWindow || window;
    !(typeof targetWindow.matchMedia === 'function') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_5___default()(false, '<Media targetWindow> does not support `matchMedia`.') : undefined : void 0;
    var query = this.props.query;
    if (typeof query !== 'string') query = json2mq__WEBPACK_IMPORTED_MODULE_6___default()(query);
    this.mediaQueryList = new MediaQueryList(targetWindow, query, this.updateMatches);
    this.updateMatches();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        render = _this$props.render;
    var matches = this.state.matches;
    return render ? matches ? render() : null : children ? typeof children === 'function' ? children(matches) : !Array.isArray(children) || children.length // Preact defaults to empty children array
    ? matches ? react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children) : null : null : null;
  };

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Media, "defaultProps", {
  defaultMatches: true
});

if (true) {
  Media.propTypes = {
    defaultMatches: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired)]).isRequired,
    render: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
    targetWindow: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Media);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(14);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ focusable: "false", width: "11", height: "17", viewBox: "0 0 11 17" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M84 252.898l2.08 2.08 8.741-8.74L86.584 238l-2.08 2.08 6.157 6.158-6.661 6.66z", transform: "matrix(-1 0 0 1 94.821 -238)", id: "chevron-left", fill: "#98A4AE" })
    )
  );
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ focusable: "false", width: "11", height: "17", viewBox: "0 0 11 17" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M571 253.898l2.08 2.08 8.741-8.74-8.237-8.238-2.08 2.08 6.157 6.158-6.661 6.66z", transform: "translate(-571 -239)", id: "chevron-right", fill: "#98A4AE" })
    )
  );
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_testing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_testing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_testing_library__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var defaultDateFormat = "MM/DD/YYYY";

function makeSelection(_x) {
  return _makeSelection.apply(this, arguments);
}

function _makeSelection() {
  _makeSelection = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var inputElement, nextSelectionDate, _ref$format, nextSelectionFormat, _ref$warnings, warnings, getByText, getByLabelText, queryByLabelText, isSelection, calendarAriaLabelText, navPrevAriaLabelText, navNextAriaLabelText, monthLabelFormat, dateAriaLabelFormat, currentSelectionMoment, nextSelectionMoment, isNextSelectionMonthVisible, handleMonthNavigation, nextSelectionLabelText;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputElement = _ref.element, nextSelectionDate = _ref.date, _ref$format = _ref.format, nextSelectionFormat = _ref$format === void 0 ? defaultDateFormat : _ref$format, _ref$warnings = _ref.warnings, warnings = _ref$warnings === void 0 ? true : _ref$warnings, getByText = _ref.getByText, getByLabelText = _ref.getByLabelText, queryByLabelText = _ref.queryByLabelText;

            if (!(inputElement.type === "date")) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", react_testing_library__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].change(inputElement, {
              target: {
                value: nextSelectionDate.format("YYYY-MM-DD")
              }
            }));

          case 3:
            /*
              datepicker
            */
            // input element info
            isSelection = !!inputElement.value; // calendar element info

            calendarAriaLabelText = "Calendar";
            navPrevAriaLabelText = "Move backward to switch to the previous month.";
            navNextAriaLabelText = "Move forward to switch to the next month.";
            monthLabelFormat = "MMMM YYYY";
            dateAriaLabelFormat = "dddd, MMMM D, YYYY"; // moment objects

            currentSelectionMoment = isSelection ? moment__WEBPACK_IMPORTED_MODULE_0___default()(inputElement.value, defaultDateFormat) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
            nextSelectionMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(nextSelectionDate, nextSelectionFormat); // navigation helpers

            isNextSelectionMonthVisible = function isNextSelectionMonthVisible() {
              try {
                getByText(nextSelectionMoment.format(monthLabelFormat));
                return true;
              } catch (e) {
                return false;
              }
            };

            handleMonthNavigation = function handleMonthNavigation() {
              if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
                react_testing_library__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].click(getByLabelText(navPrevAriaLabelText));
              } else {
                react_testing_library__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].click(getByLabelText(navNextAriaLabelText));
              }
            }; // focus input (opens calendar)


            inputElement.focus(); // validate calendar is open

            expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument(); // navigate to next selection month

            while (!isNextSelectionMonthVisible()) {
              handleMonthNavigation();
            } // attempt next selection...


            nextSelectionLabelText = nextSelectionMoment.format(dateAriaLabelFormat);

            try {
              // make next selection
              react_testing_library__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].click(getByLabelText(nextSelectionLabelText)); // validate calendar is closed

              expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
            } catch (e) {
              // warn consumer if they have not disabled warnings
              if (warnings) {
                // eslint-disable-next-line no-console
                console.warn("Unable to select `date` with aria-label \"".concat(nextSelectionLabelText, "\". If this is the expected result, then set `warnings` to false in this call to `makeSingleDatePickerSelection`."));
              }
            } finally {
              // blur input
              inputElement.blur();
            }

            return _context.abrupt("return", undefined);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeSelection.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ })
/******/ ]);
});