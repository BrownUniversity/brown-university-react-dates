function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";
import { WindowSize } from "react-fns";
import { breakpoints, colors, typography, getRems } from "brown-university-styles";

var ChevronLeftSVG = function ChevronLeftSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M84 252.898l2.08 2.08 8.741-8.74L86.584 238l-2.08 2.08 6.157 6.158-6.661 6.66z",
    transform: "matrix(-1 0 0 1 94.821 -238)",
    id: "chevron-left",
    fill: "#98A4AE"
  })));
};

ChevronLeftSVG.defaultProps = {
  focusable: "false",
  width: "11",
  height: "17",
  viewBox: "0 0 11 17"
};

var ChevronRightSVG = function ChevronRightSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M571 253.898l2.08 2.08 8.741-8.74-8.237-8.238-2.08 2.08 6.157 6.158-6.661 6.66z",
    transform: "translate(-571 -239)",
    id: "chevron-right",
    fill: "#98A4AE"
  })));
};

ChevronRightSVG.defaultProps = {
  focusable: "false",
  width: "11",
  height: "17",
  viewBox: "0 0 11 17"
};
/*
  css mixins
*/

var inputCSS = css(["box-sizing:border-box;color:", ";display:block;font-family:", ";font-size:", ";padding:8px;width:100%;&[type=\"text\"]{padding-top:9px;padding-bottom:7px;padding-left:10px;}"], colors.mediumGray, typography.sans, getRems(16));
/*
  inner components
*/

var MobileInput = styled.input.withConfig({
  displayName: "SingleDatePicker__MobileInput",
  componentId: "sc-7ojo1s-0"
})(["", ""], inputCSS);
var DesktopWrapper = styled.div.withConfig({
  displayName: "SingleDatePicker__DesktopWrapper",
  componentId: "sc-7ojo1s-1"
})([".SingleDatePicker,.SingleDatePickerInput,.DateInput{width:100%;}.DateInput_input{", " &::before,&::after{display:none;}}.DateInput_input__focused{border-bottom:2px solid transparent;}.DayPickerNavigation_button{border:1px solid ", ";border-radius:3px;line-height:0.78;padding:6px 9px;position:absolute;top:18px;#chevron-left,#chevron-right{fill:", ";}&:first-of-type{left:22px;}&:last-of-type{right:22px;}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";}.DayPicker_weekHeader{& small{color:", ";font-family:", ";font-size:", ";}}.CalendarDay,.CalendarDay:hover{border:none;}.CalendarDay__default{color:", ";font-family:", ";font-weight:bold;}.CalendarDay__blocked_out_of_range,.CalendarDay__blocked_out_of_range:hover{color:", ";}.CalendarDay__selected,.CalendarDay__selected:hover{background-color:", ";border-radius:20px;color:", ";}.CalendarDay__highlighted_calendar{&:not(.CalendarDay__blocked_out_of_range,.CalendarDay__selected){background-color:rgba(255,199,44,0.65);&:hover{background-color:", ";}}}.CalendarDay__blocked_calendar,.CalendarDay__blocked_calendar:hover{&:not(.CalendarDay__blocked_out_of_range){color:", ";background-color:", ";}}.DayPickerKeyboardShortcuts_show::before,.DayPickerKeyboardShortcuts_show:hover::before{border-right:33px solid ", ";}.DayPickerKeyboardShortcuts_title{font-family:", ";}.KeyboardShortcutRow{margin-bottom:12px;}.KeyboardShortcutRow_keyContainer{display:inline;margin-right:6px;}.KeyboardShortcutRow_key{background:", ";padding:2px 6px;}.KeyboardShortcutRow_action{display:inline;font-family:", ";}"], inputCSS, colors.lightGray, function (_ref) {
  var color = _ref.color;
  return colors[color];
}, function (_ref2) {
  var color = _ref2.color;
  return colors[color];
}, typography.sansBold, getRems(18), colors.black, typography.sansBold, getRems(12), colors.black, typography.sans, colors.mediumGray, function (_ref3) {
  var color = _ref3.color;
  return colors[color];
}, colors.white, colors.gold, colors.mediumGray, colors.transparentBlack, function (_ref4) {
  var color = _ref4.color;
  return colors[color];
}, typography.sansBold, colors.lightGray, typography.sans);
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
      onFocusChange = _ref5.onFocusChange,
      restProps = _objectWithoutProperties(_ref5, ["color", "mobileBreakpoint", "numberOfMonths", "placeholder", "id", "date", "onDateChange", "onFocusChange"]);

  return React.createElement(WindowSize, {
    render: function render(_ref6) {
      var width = _ref6.width;
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        var mobileDateFormat = "YYYY-MM-DD";
        return React.createElement(MobileInput, {
          type: "date",
          id: id,
          value: date ? date.format(mobileDateFormat) : "",
          onChange: function onChange(e) {
            if (e.target.value) {
              onDateChange(moment(e.target.value, mobileDateFormat));
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

      return React.createElement(DesktopWrapper, {
        color: color
      }, React.createElement(AirbnbSingleDatePicker, _extends({
        navPrev: React.createElement(ChevronLeftSVG, null),
        navNext: React.createElement(ChevronRightSVG, null),
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

SingleDatePicker.propTypes = {
  color: PropTypes.oneOf(["red", "brown", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]),
  mobileBreakpoint: PropTypes.number,
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string,
  // react-dates...
  id: PropTypes.string,
  date: PropTypes.shape({}),
  onDateChange: PropTypes.func,
  onFocusChange: PropTypes.func
};
SingleDatePicker.defaultProps = {
  color: "red",
  mobileBreakpoint: breakpoints.md,
  numberOfMonths: 1,
  placeholder: "mm/dd/yyyy",
  // react-dates...
  id: null,
  date: null,
  onDateChange: null,
  onFocusChange: null
};
export default SingleDatePicker;