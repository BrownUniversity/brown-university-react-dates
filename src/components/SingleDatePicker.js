import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";
import "react-dates/initialize";
import { colors, typography } from "brown-university-styles";

/*
  move to, or derive from, brown-university-styles?
*/
const inputFontSize = "1.1rem";
const calendarDayFontSize = "1rem";

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
    color: ${colors.red};
    font-family: ${typography.sansBold};
    font-size: ${calendarDayFontSize};
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
    background-color: ${colors.red};
    color: ${colors.white};
    border-radius: 20px;
  }

  .DayPickerKeyboardShortcuts_show::before {
    border-right: 33px solid ${colors.red};
  }
`;

/*
  outer SingleDatePicker component
*/
const SingleDatePicker = ({ numberOfMonths, placeholder, ...restProps }) => (
  <Wrapper>
    <AirbnbSingleDatePicker
      numberOfMonths={numberOfMonths}
      placeholder={placeholder}
      {...restProps}
    />
  </Wrapper>
);

SingleDatePicker.propTypes = {
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string
};

SingleDatePicker.defaultProps = {
  numberOfMonths: 1,
  placeholder: "MM/DD/YYYY"
};

export default SingleDatePicker;
