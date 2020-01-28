function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from "react";
/*
  NOTE: This component is just for tests and stories inside this repo;
  however, it can serve as an example of the minimal implementation of
  the `SingleDatePicker` component (aside from the use of `React.cloneElement`).
*/

var SingleDatePickerContainer = function SingleDatePickerContainer(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "single-date-picker" : _ref$id,
      _ref$date = _ref.date,
      initialDate = _ref$date === void 0 ? null : _ref$date,
      _ref$focused = _ref.focused,
      initialFocused = _ref$focused === void 0 ? false : _ref$focused,
      _ref$onDateChange = _ref.onDateChange,
      onDateChange = _ref$onDateChange === void 0 ? function () {
    return undefined;
  } : _ref$onDateChange,
      _ref$onFocusChange = _ref.onFocusChange,
      onFocusChange = _ref$onFocusChange === void 0 ? function () {
    return undefined;
  } : _ref$onFocusChange,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["id", "date", "focused", "onDateChange", "onFocusChange", "children"]);

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

  return React.cloneElement(children, _objectSpread({
    id: id,
    date: date,
    onDateChange: handleDateChange,
    focused: focused,
    onFocusChange: handleFocusChange
  }, restProps));
};

export default SingleDatePickerContainer;