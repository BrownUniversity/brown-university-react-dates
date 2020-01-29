/*! brown-university-react-dates v1.2.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("styled-components"), require("moment"), require("react-dates"), require("react-fns"), require("brown-university-styles"), require("@testing-library/react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "styled-components", "moment", "react-dates", "react-fns", "brown-university-styles", "@testing-library/react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react"), require("styled-components"), require("moment"), require("react-dates"), require("react-fns"), require("brown-university-styles"), require("@testing-library/react")) : factory(root["prop-types"], root["react"], root["styled-components"], root["moment"], root["react-dates"], root["react-fns"], root["brown-university-styles"], root["@testing-library/react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__14__) {
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

/* harmony import */ var _components_DayPickerSingleDateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerSingleDateController", function() { return _components_DayPickerSingleDateController__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _test_utils_single_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleDatePickerTestUtils", function() { return _test_utils_single_date_picker__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _test_utils_day_picker_single_date_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayPickerSingleDateControllerTestUtils", function() { return _test_utils_day_picker_single_date_controller__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _styled_shared_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
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
})([".SingleDatePicker,.SingleDatePickerInput,.DateInput{width:100%;}.DateInput_input{", " &::before,&::after{display:none;}}.DateInput_input__focused{border-bottom:2px solid transparent;}.DayPickerNavigation_button{border:1px solid ", ";border-radius:3px;line-height:0.78;padding:6px 9px;position:absolute;top:18px;#chevron-left,#chevron-right{fill:", ";}&:first-of-type{left:22px;}&:last-of-type{right:22px;}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";}.DayPicker_weekHeader{", "}", " .CalendarDay__selected,.CalendarDay__selected:hover{border-radius:20px;}"], inputCSS, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].lightGray, function (_ref) {
  var color = _ref.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["typography"].sansBold, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["getRems"])(18), _styled_shared_styles__WEBPACK_IMPORTED_MODULE_9__["WeekHeaderCSS"], _styled_shared_styles__WEBPACK_IMPORTED_MODULE_9__["CalendarDayCSS"]);
/*
  outer SingleDatePicker component
*/

var SingleDatePicker = function SingleDatePicker(_ref3) {
  var color = _ref3.color,
      mobileBreakpoint = _ref3.mobileBreakpoint,
      numberOfMonths = _ref3.numberOfMonths,
      placeholder = _ref3.placeholder,
      id = _ref3.id,
      date = _ref3.date,
      onDateChange = _ref3.onDateChange,
      onFocusChange = _ref3.onFocusChange,
      restProps = _objectWithoutProperties(_ref3, ["color", "mobileBreakpoint", "numberOfMonths", "placeholder", "id", "date", "onDateChange", "onFocusChange"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fns__WEBPACK_IMPORTED_MODULE_5__["WindowSize"], {
    render: function render(_ref4) {
      var width = _ref4.width;
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
              // handle invalid date
              onDateChange(null);
            }
          },
          onBlur: function onBlur() {
            return onFocusChange({
              focused: false
            });
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
        onDateChange: onDateChange,
        onFocusChange: onFocusChange
      }, restProps)));
    }
  });
};

SingleDatePicker.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]),
  mobileBreakpoint: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  numberOfMonths: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // react-dates...
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({}),
  onDateChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onFocusChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
} : undefined;
SingleDatePicker.defaultProps = {
  color: "red",
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_6__["breakpoints"].md,
  numberOfMonths: 1,
  placeholder: "mm/dd/yyyy",
  // react-dates...
  id: null,
  date: null,
  onDateChange: null,
  onFocusChange: null
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  focusable: "false",
  width: "11",
  height: "17"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M84 252.898l2.08 2.08 8.741-8.74L86.584 238l-2.08 2.08 6.157 6.158-6.661 6.66z",
  transform: "matrix(-1 0 0 1 94.821 -238)",
  id: "chevron-left",
  fill: "#98A4AE"
}))));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  focusable: "false",
  width: "11",
  height: "17"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M571 253.898l2.08 2.08 8.741-8.74-8.237-8.238-2.08 2.08 6.157 6.158-6.661 6.66z",
  transform: "translate(-571 -239)",
  id: "chevron-right",
  fill: "#98A4AE"
}))));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekHeaderCSS", function() { return WeekHeaderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayCSS", function() { return CalendarDayCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_1__);


var WeekHeaderCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["& small{color:", ";font-family:", ";font-size:", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].darkGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["typography"].sansBold, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["getRems"])(12));
var CalendarDayCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([".CalendarDay,.CalendarDay:hover{border:none;}.CalendarDay__default{color:", ";font-family:", ";}.CalendarDay__selected,.CalendarDay__selected:hover{background-color:", ";color:", ";}.CalendarDay__blocked_out_of_range,.CalendarDay__blocked_out_of_range:hover{color:", ";}.CalendarDay__highlighted_calendar{&:not(.CalendarDay__blocked_out_of_range,.CalendarDay__selected){background-color:rgba(255,199,44,0.65);&:hover{background-color:", ";}}}.CalendarDay__blocked_calendar,.CalendarDay__blocked_calendar:hover{&:not(.CalendarDay__blocked_out_of_range){color:", ";background-color:", ";}}.DayPickerKeyboardShortcuts_show::before,.DayPickerKeyboardShortcuts_show:hover::before{border-right:33px solid ", ";}.DayPickerKeyboardShortcuts_title{font-family:", ";}.KeyboardShortcutRow{margin-bottom:12px;}.KeyboardShortcutRow_keyContainer{display:inline;margin-right:6px;}.KeyboardShortcutRow_key{background:", ";padding:2px 6px;}.KeyboardShortcutRow_action{display:inline;font-family:", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].black, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["typography"].sansBold, function (_ref) {
  var color = _ref.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].white, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].mediumGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].gold, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].mediumGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].transparentBlack, function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"][color];
}, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["typography"].sansBold, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].lightGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["typography"].sans);

/***/ }),
/* 12 */
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
/* harmony import */ var brown_university_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var brown_university_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brown_university_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_shared_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/*
  inner components
*/

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DayPickerSingleDateController__Wrapper",
  componentId: "rwphxm-0"
})([".DayPickerSingleDateController{width:100%;}.DayPickerNavigation_button{position:absolute;top:23px;background-color:", ";border-radius:20px;width:18px;height:12px;text-align:center;padding-top:6px;svg{fill:", ";width:8px;height:8px;display:block;margin:auto;}&:first-of-type{left:35px;transform:rotate(90deg);}&:last-of-type{right:35px;transform:rotate(-90deg);}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";font-weight:normal;padding-bottom:48px;}.DayPicker_weekHeader{", " & ul{border:1px solid ", ";}& li{padding:5px 0;}}", " .CalendarDay__default{font-size:", ";}.CalendarDay__outside{&:not(.CalendarDay__blocked_out_of_range){background-color:", ";color:", ";}}"], brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].gray, brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].white, brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].black, brown_university_components__WEBPACK_IMPORTED_MODULE_5__["typography"].sans, Object(brown_university_components__WEBPACK_IMPORTED_MODULE_5__["getRems"])(16), _styled_shared_styles__WEBPACK_IMPORTED_MODULE_6__["WeekHeaderCSS"], brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].transparentBlack, _styled_shared_styles__WEBPACK_IMPORTED_MODULE_6__["CalendarDayCSS"], Object(brown_university_components__WEBPACK_IMPORTED_MODULE_5__["getRems"])(12), brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].lightGray, brown_university_components__WEBPACK_IMPORTED_MODULE_5__["colors"].mediumGray);
/*
  outer DayPickerSingleDateController component
*/

var DayPickerSingleDateController = function DayPickerSingleDateController(_ref) {
  var color = _ref.color,
      numberOfMonths = _ref.numberOfMonths,
      date = _ref.date,
      onDateChange = _ref.onDateChange,
      onFocusChange = _ref.onFocusChange,
      restProps = _objectWithoutProperties(_ref, ["color", "numberOfMonths", "date", "onDateChange", "onFocusChange"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    color: color,
    "data-testid": "picker"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["DayPickerSingleDateController"], _extends({
    navPrev: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(brown_university_components__WEBPACK_IMPORTED_MODULE_5__["CaretDownSVG"], null),
    navNext: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(brown_university_components__WEBPACK_IMPORTED_MODULE_5__["CaretDownSVG"], null),
    numberOfMonths: numberOfMonths,
    date: date,
    onDateChange: onDateChange,
    onFocusChange: onFocusChange
  }, restProps)));
};

DayPickerSingleDateController.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "darkEmerald", "emerald", "skyBlue", "navy", "idRed"]),
  numberOfMonths: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  // react-dates...
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({}),
  onDateChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onFocusChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isOutsideRange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
} : undefined;
DayPickerSingleDateController.defaultProps = {
  color: "darkEmerald",
  numberOfMonths: 1,
  // react-dates...
  date: null,
  onDateChange: null,
  onFocusChange: null,
  isOutsideRange: function isOutsideRange(day) {
    return !Object(react_dates__WEBPACK_IMPORTED_MODULE_4__["isInclusivelyAfterDay"])(day, moment__WEBPACK_IMPORTED_MODULE_3___default()());
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DayPickerSingleDateController);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoDateFormat", function() { return isoDateFormat; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_testing_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



var defaultDateFormat = "MM/DD/YYYY";
var isoDateFormat = "YYYY-MM-DD";

function makeSelection(_ref) {
  var inputElement = _ref.element,
      nextSelectionDate = _ref.date,
      _ref$format = _ref.format,
      nextSelectionFormat = _ref$format === void 0 ? defaultDateFormat : _ref$format,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? true : _ref$warnings,
      getByText = _ref.getByText,
      getByLabelText = _ref.getByLabelText,
      queryByLabelText = _ref.queryByLabelText;

  /*
    handle empty date selection
  */
  if (!nextSelectionDate) {
    return _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].change(inputElement, {
      target: {
        value: ""
      }
    });
  }
  /*
    handle mobile date selection
  */


  if (inputElement.type === "date") {
    return _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].change(inputElement, {
      target: {
        value: moment__WEBPACK_IMPORTED_MODULE_0___default()(nextSelectionDate, nextSelectionFormat).format(isoDateFormat)
      }
    });
  }
  /*
    handle desktop date selection
  */
  // input element info


  var isSelection = !!inputElement.value; // calendar element info

  var calendarAriaLabelText = "Calendar"; // moment objects

  var currentSelectionMoment = isSelection ? moment__WEBPACK_IMPORTED_MODULE_0___default()(inputElement.value, defaultDateFormat) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  var nextSelectionMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(nextSelectionDate, nextSelectionFormat); // focus input (opens calendar)

  inputElement.focus(); // validate calendar is open

  expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument(); // navigate to next selection month

  Object(_shared__WEBPACK_IMPORTED_MODULE_2__["navigateMonth"])(nextSelectionMoment, currentSelectionMoment, _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"], getByLabelText, getByText); // attempt next selection...

  var nextSelectionLabelText = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["getDateLabelText"])(nextSelectionMoment);

  try {
    // make next selection
    _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].click(getByLabelText(nextSelectionLabelText)); // validate calendar is closed

    expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
  } catch (e) {
    Object(_shared__WEBPACK_IMPORTED_MODULE_2__["handleWarnings"])(warnings, nextSelectionLabelText);
  } finally {
    // blur input
    inputElement.blur();
  }

  return undefined;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneYearAgo", function() { return oneYearAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sixMonthsAgo", function() { return sixMonthsAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesterday", function() { return yesterday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextWeek", function() { return nextWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneMonthFromNow", function() { return oneMonthFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sixMonthsFromNow", function() { return sixMonthsFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneYearFromNow", function() { return oneYearFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateMonth", function() { return navigateMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateLabelText", function() { return getDateLabelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleWarnings", function() { return handleWarnings; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
 // `react-dates` renders a month to either side of the currently visible month(s)

var oneYearAgo = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "year");
var sixMonthsAgo = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(6, "months");
var yesterday = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "day");
var today = moment__WEBPACK_IMPORTED_MODULE_0___default()();
var nextWeek = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "week");
var oneMonthFromNow = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "month");
var sixMonthsFromNow = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(6, "months");
var oneYearFromNow = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, "year"); // navigation helpers

var isNextSelectionMonthVisible = function isNextSelectionMonthVisible(nextSelectionMoment, getByText) {
  try {
    getByText(nextSelectionMoment.format("MMMM YYYY"));
    return true;
  } catch (e) {
    return false;
  }
};

var navigateMonth = function navigateMonth(nextSelectionMoment, currentSelectionMoment, fireEvent, getByLabelText, getByText) {
  while (!isNextSelectionMonthVisible(nextSelectionMoment, getByText)) {
    if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
      fireEvent.click(getByLabelText("Move backward to switch to the previous month."));
    } else {
      fireEvent.click(getByLabelText("Move forward to switch to the next month."));
    }
  }
};
var getDateLabelText = function getDateLabelText(date) {
  return date.format("dddd, MMMM D, YYYY");
}; // warn consumer if they have not disabled warnings

var handleWarnings = function handleWarnings(warnings, nextSelectionLabelText) {
  if (warnings) {
    // eslint-disable-next-line no-console
    console.warn("Unable to select `date` with aria-label \"".concat(nextSelectionLabelText, "\". If this is the expected result, then set `warnings` to false in this call to `singleDatePickerTestUtils.makeSelection`."));
  }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_testing_library_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



var defaultDateFormat = "dddd, MMMM D, YYYY";

function makeSelection(_ref) {
  var nextSelectionDate = _ref.date,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? true : _ref$warnings,
      getByText = _ref.getByText,
      getByLabelText = _ref.getByLabelText;
  var nextSelectionMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(nextSelectionDate, defaultDateFormat); // navigate to next selection month

  Object(_shared__WEBPACK_IMPORTED_MODULE_2__["navigateMonth"])(nextSelectionMoment, moment__WEBPACK_IMPORTED_MODULE_0___default()(), _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"], getByLabelText, getByText); // attempt next selection...

  try {
    _testing_library_react__WEBPACK_IMPORTED_MODULE_1__["fireEvent"].click(getByLabelText(nextSelectionDate));
  } catch (e) {
    Object(_shared__WEBPACK_IMPORTED_MODULE_2__["handleWarnings"])(warnings, nextSelectionDate);
  }

  return undefined;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
});

/***/ })
/******/ ]);
});