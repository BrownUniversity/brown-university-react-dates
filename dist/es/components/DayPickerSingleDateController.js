function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import moment from "moment";
import { DayPickerSingleDateController as AirbnbDayPickerSingleDateController, isInclusivelyAfterDay } from "react-dates";
import { CaretDownSVG } from "brown-university-components";
import { colors, typography, getRems } from "brown-university-styles";
import { WeekHeaderCSS, CalendarDayCSS } from "./utils/shared_styles";
/*
  inner components
*/

var Wrapper = styled.div.withConfig({
  displayName: "DayPickerSingleDateController__Wrapper",
  componentId: "rwphxm-0"
})([".DayPickerSingleDateController{width:100%;}.DayPickerNavigation_button{position:absolute;top:23px;background-color:", ";border-radius:20px;width:18px;height:12px;text-align:center;padding-top:6px;svg{fill:", ";width:8px;height:8px;display:block;margin:auto;}&:first-of-type{left:35px;transform:rotate(90deg);}&:last-of-type{right:35px;transform:rotate(-90deg);}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";font-weight:normal;padding-bottom:48px;}.DayPicker_weekHeader{", " & ul{border:1px solid ", ";}& li{padding:5px 0;}}", " .CalendarDay__default{font-size:", ";}.CalendarDay__outside{&:not(.CalendarDay__blocked_out_of_range){background-color:", ";color:", ";}}"], colors.gray, colors.white, colors.black, typography.sans, getRems(16), WeekHeaderCSS, colors.transparentBlack, CalendarDayCSS, getRems(12), colors.lightGray, colors.mediumGray);
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

  return React.createElement(Wrapper, {
    color: color,
    "data-testid": "picker"
  }, React.createElement(AirbnbDayPickerSingleDateController, _extends({
    navPrev: React.createElement(CaretDownSVG, null),
    navNext: React.createElement(CaretDownSVG, null),
    numberOfMonths: numberOfMonths,
    date: date,
    onDateChange: onDateChange,
    onFocusChange: onFocusChange
  }, restProps)));
};

DayPickerSingleDateController.propTypes = {
  color: PropTypes.oneOf(["red", "brown", "darkEmerald", "emerald", "skyBlue", "navy", "idRed"]),
  numberOfMonths: PropTypes.number,
  // react-dates...
  date: PropTypes.shape({}),
  onDateChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  isOutsideRange: PropTypes.func
};
DayPickerSingleDateController.defaultProps = {
  color: "darkEmerald",
  numberOfMonths: 1,
  // react-dates...
  date: null,
  onDateChange: null,
  onFocusChange: null,
  isOutsideRange: function isOutsideRange(day) {
    return !isInclusivelyAfterDay(day, moment());
  }
};
export default DayPickerSingleDateController;