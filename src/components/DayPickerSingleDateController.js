import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import moment from "moment";
import {
  DayPickerSingleDateController as AirbnbDayPickerSingleDateController,
  isInclusivelyAfterDay
} from "react-dates";
import { CaretDownSVG } from "brown-university-components";
import { colors, typography, getRems } from "brown-university-styles";
import { WeekHeaderCSS, CalendarDayCSS } from "./styled/shared_styles";

/*
  inner components
*/
const Wrapper = styled.div`
  .DayPickerSingleDateController {
    width: 100%;
  }

  .DayPickerNavigation_button {
    position: absolute;
    top: 23px;
    background-color: ${colors.gray};
    border-radius: 20px;
    width: 18px;
    height: 12px;
    text-align: center;
    padding-top: 6px;

    svg {
      fill: ${colors.white};
      width: 8px;
      height: 8px;
      display: block;
      margin: auto;
    }

    &:first-of-type {
      left: 35px;
      transform: rotate(90deg);
    }

    &:last-of-type {
      right: 35px;
      transform: rotate(-90deg);
    }
  }

  .CalendarMonth_caption {
    color: ${colors.black};
    font-family: ${typography.sans};
    font-size: ${getRems(16)};
    font-weight: normal;
    padding-bottom: 48px;
  }

  .DayPicker_weekHeader {
    ${WeekHeaderCSS}

    & ul {
      border: 1px solid ${colors.transparentBlack};
    }

    & li {
      padding: 5px 0;
    }
  }

  ${CalendarDayCSS}

  .CalendarDay__default {
    font-size: ${getRems(12)};
  }

  .CalendarDay__outside {
    &:not(.CalendarDay__blocked_out_of_range) {
      background-color: ${colors.lightGray};
      color: ${colors.mediumGray};
    }
  }
`;

/*
  outer DayPickerSingleDateController component
*/
const DayPickerSingleDateController = ({
  color,
  numberOfMonths,
  // react-dates...
  date,
  onDateChange,
  onFocusChange,
  ...restProps
}) => (
  <Wrapper color={color} data-testid="picker">
    <AirbnbDayPickerSingleDateController
      navPrev={<CaretDownSVG />}
      navNext={<CaretDownSVG />}
      numberOfMonths={numberOfMonths}
      date={date}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      {...restProps}
    />
  </Wrapper>
);

DayPickerSingleDateController.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "brown",
    "darkEmerald",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]),
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
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment())
};

export default DayPickerSingleDateController;
