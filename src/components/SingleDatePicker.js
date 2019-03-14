import PropTypes from "prop-types";
import React from "react";
import moment from "moment";
import styled from "styled-components";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";
import { colors, typography } from "brown-university-styles";

/*
  move to, or derive from, brown-university-styles?
*/
// baseFontSize of 16
const inputFontSize = "1.1rem"; // getRems(16)
const dayPickerWeekHeaderFontSize = "0.75rem"; // getRems(12)
const calendarDayFontSize = "1.125rem"; // getRems(18)

moment.updateLocale("en", {
  weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
});

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

  .CalendarMonth_caption {
    color: ${({ color }) => colors[color]};
    font-family: ${typography.sansBold};
    font-size: ${calendarDayFontSize};
  }

  .DayPicker_weekHeader {
    & small {
      font-family: ${typography.sansBold};
      font-size: ${dayPickerWeekHeaderFontSize};
      color: ${colors.black};
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
    color: ${colors.white};
    border-radius: 20px;
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
      numberOfMonths={numberOfMonths}
      placeholder={placeholder}
      {...restProps}
    />
  </Wrapper>
);

SingleDatePicker.propTypes = {
  color: PropTypes.oneOf(["red", "idRed"]),
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string
};

SingleDatePicker.defaultProps = {
  color: "red",
  numberOfMonths: 1,
  placeholder: "MM/DD/YYYY"
};

export default SingleDatePicker;
