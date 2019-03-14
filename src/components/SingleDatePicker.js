import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";
import { colors, typography } from "brown-university-styles";
import ChevronLeftSVG from "../svg/chevron-left.svg";
import ChevronRightSVG from "../svg/chevron-right.svg";

/*
  TODO: take from brown-university-styles
*/
// baseFontSize of 16
const inputFontSize = "1.1rem"; // getRems(16)
const dayPickerWeekHeaderFontSize = "0.75rem"; // getRems(12)
const calendarDayFontSize = "1.125rem"; // getRems(18)

/*
  inner components
*/
const Wrapper = styled.div`
  .SingleDatePicker,
  .SingleDatePickerInput,
  .DateInput,
  .DateInput_input {
    width: 100%;
  }

  .DateInput_input {
    box-sizing: border-box;
    color: ${colors.mediumGray};
    display: block;
    font-family: ${typography.sans};
    font-size: ${inputFontSize};
    padding: 8px;

    &::before,
    &::after {
      display: none;
    }
  }

  .DateInput_input__focused {
    border-bottom: 2px solid transparent;
  }

  .DayPickerNavigation_button {
    border: 1px solid ${colors.lightGray};
    border-radius: 3px;
    line-height: 0.78;
    padding: 6px 9px;
    position: absolute;
    top: 18px;

    #chevron-left,
    #chevron-right {
      fill: ${({ color }) => colors[color]};
    }

    &:first-of-type {
      left: 22px;
    }

    &:last-of-type {
      right: 22px;
    }
  }

  .CalendarMonth_caption {
    color: ${({ color }) => colors[color]};
    font-family: ${typography.sansBold};
    font-size: ${calendarDayFontSize};
  }

  .DayPicker_weekHeader {
    & small {
      color: ${colors.black};
      font-family: ${typography.sansBold};
      font-size: ${dayPickerWeekHeaderFontSize};
    }
  }

  .CalendarDay__default {
    border: none;
    color: ${colors.black};
    font-family: ${typography.sans};
    font-weight: bold;
  }

  .CalendarDay__blocked_out_of_range {
    color: ${colors.mediumGray};
  }

  .CalendarDay__selected {
    background-color: ${({ color }) => colors[color]};
    border-radius: 20px;
    color: ${colors.white};
  }

  .CalendarDay__highlighted_calendar {
    &:not(.CalendarDay__blocked_out_of_range, .CalendarDay__selected) {
      background-color: rgba(255, 199, 44, 0.65);

      &:hover {
        background-color: ${colors.gold};
      }
    }
  }

  .CalendarDay__blocked_calendar {
    color: ${colors.mediumGray};
    background-color: ${colors.transparentBlack};
  }

  .DayPickerKeyboardShortcuts_show::before {
    border-right: 33px solid ${({ color }) => colors[color]};
  }

  .DayPickerKeyboardShortcuts_title {
    font-family: ${typography.sansBold};
  }

  .KeyboardShortcutRow {
    margin-bottom: 12px;
  }

  .KeyboardShortcutRow_keyContainer {
    display: inline;
    margin-right: 6px;
  }

  .KeyboardShortcutRow_key {
    background: ${colors.lightGray};
    padding: 2px 6px;
  }

  .KeyboardShortcutRow_action {
    display: inline;
    font-family: ${typography.sans};
  }
`;

/*
  outer SingleDatePicker component
*/
const SingleDatePicker = ({
  color,
  numberOfMonths,
  placeholder,
  ...restProps
}) => (
  <Wrapper color={color}>
    <AirbnbSingleDatePicker
      navPrev={<ChevronLeftSVG />}
      navNext={<ChevronRightSVG />}
      numberOfMonths={numberOfMonths}
      placeholder={placeholder}
      {...restProps}
    />
  </Wrapper>
);

SingleDatePicker.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]),
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string
};

SingleDatePicker.defaultProps = {
  color: "red",
  numberOfMonths: 1,
  placeholder: "MM/DD/YYYY"
};

export default SingleDatePicker;
