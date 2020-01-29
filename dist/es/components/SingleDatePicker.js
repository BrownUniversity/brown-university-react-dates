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
import { WeekHeaderCSS, CalendarDayCSS } from "./styled/shared_styles";
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
})([".SingleDatePicker,.SingleDatePickerInput,.DateInput{width:100%;}.DateInput_input{", " &::before,&::after{display:none;}}.DateInput_input__focused{border-bottom:2px solid transparent;}.DayPickerNavigation_button{border:1px solid ", ";border-radius:3px;line-height:0.78;padding:6px 9px;position:absolute;top:18px;#chevron-left,#chevron-right{fill:", ";}&:first-of-type{left:22px;}&:last-of-type{right:22px;}}.CalendarMonth_caption{color:", ";font-family:", ";font-size:", ";}.DayPicker_weekHeader{", "}", " .CalendarDay__selected,.CalendarDay__selected:hover{border-radius:20px;}"], inputCSS, colors.lightGray, function (_ref) {
  var color = _ref.color;
  return colors[color];
}, function (_ref2) {
  var color = _ref2.color;
  return colors[color];
}, typography.sansBold, getRems(18), WeekHeaderCSS, CalendarDayCSS);
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

  return React.createElement(WindowSize, {
    render: function render(_ref4) {
      var width = _ref4.width;
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