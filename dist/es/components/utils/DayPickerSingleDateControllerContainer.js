function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from "react";
import { string, bool, func, node, objectOf, oneOfType } from "prop-types";
import DayPickerSingleDateController from "../DayPickerSingleDateController";
/*
  NOTE: This component is just for tests and stories inside this repo;
  however, it can serve as an example of the minimal implementation of
  the `DayPickerSingleDateController` component.
*/

var DayPickerSingleDateControllerContainer = function DayPickerSingleDateControllerContainer(_ref) {
  var _ref$date = _ref.date,
      initialDate = _ref$date === void 0 ? null : _ref$date,
      _ref$focused = _ref.focused,
      initialFocused = _ref$focused === void 0 ? true : _ref$focused,
      _ref$onDateChange = _ref.onDateChange,
      onDateChange = _ref$onDateChange === void 0 ? function () {
    return undefined;
  } : _ref$onDateChange,
      _ref$onFocusChange = _ref.onFocusChange,
      onFocusChange = _ref$onFocusChange === void 0 ? function () {
    return undefined;
  } : _ref$onFocusChange,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["date", "focused", "onDateChange", "onFocusChange", "children"]);

  var _useState = useState(initialDate),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = useState(initialFocused),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var handleDateChange = function handleDateChange(nextDate) {
    setDate(nextDate);
    onDateChange(nextDate);
  };

  var handleFocusChange = function handleFocusChange(_ref2) {
    var nextFocused = _ref2.focused;
    setFocused(nextFocused);
    onFocusChange({
      focused: nextFocused
    });
  };

  return React.createElement("div", null, React.createElement("p", null, date ? "Selected Date: ".concat(date.format("dddd, MMMM D, YYYY")) : "No date selected"), React.createElement(DayPickerSingleDateController, _extends({
    date: date,
    onDateChange: handleDateChange,
    focused: focused,
    onFocusChange: handleFocusChange
  }, restProps)));
};

DayPickerSingleDateControllerContainer.propTypes = {
  date: objectOf(oneOfType([string, bool])),
  focused: bool,
  onDateChange: func,
  onFocusChange: func,
  children: node.isRequired
};
DayPickerSingleDateControllerContainer.defaultProps = {
  date: null,
  focused: true,
  onDateChange: undefined,
  onFocusChange: undefined
};
export default DayPickerSingleDateControllerContainer;