import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";
import { WindowSize } from "react-fns";
import {
  breakpoints,
  colors,
  typography,
  getRems
} from "brown-university-styles";
import ChevronLeftSVG from "../svg/chevron-left.svg";
import ChevronRightSVG from "../svg/chevron-right.svg";

/*
  css mixins
*/
const inputCSS = css`
  box-sizing: border-box;
  color: ${colors.mediumGray};
  display: block;
  font-family: ${typography.sans};
  font-size: ${getRems(16)};
  padding: 8px;
  width: 100%;

  &[type="text"] {
    padding-top: 9px;
    padding-bottom: 7px;
    padding-left: 10px;
  }
`;

/*
  inner components
*/
const MobileInput = styled.input`
  ${inputCSS}
`;

const DesktopWrapper = styled.div`
  .SingleDatePicker,
  .SingleDatePickerInput,
  .DateInput {
    width: 100%;
  }

  .DateInput_input {
    ${inputCSS}

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
    font-size: ${getRems(18)};
  }

  .DayPicker_weekHeader {
    & small {
      color: ${colors.black};
      font-family: ${typography.sansBold};
      font-size: ${getRems(12)};
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
    &:not(.CalendarDay__blocked_out_of_range) {
      color: ${colors.mediumGray};
      background-color: ${colors.transparentBlack};
    }
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
  mobileBreakpoint,
  numberOfMonths,
  placeholder,
  // react-dates...
  id,
  date,
  onDateChange,
  ...restProps
}) => (
  <WindowSize
    render={({ width }) => {
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      const currentWidth = width === 0 ? window.innerWidth : width;
      const renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        const mobileDateFormat = "YYYY-MM-DD";

        return (
          <MobileInput
            type="date"
            id={id}
            value={date ? date.format(mobileDateFormat) : ""}
            onChange={e => {
              if (e.target.value) {
                onDateChange(moment(e.target.value, mobileDateFormat));
              } else {
                onDateChange(null);
              }
            }}
          />
        );
      }

      return (
        <DesktopWrapper color={color}>
          <AirbnbSingleDatePicker
            navPrev={<ChevronLeftSVG />}
            navNext={<ChevronRightSVG />}
            numberOfMonths={numberOfMonths}
            placeholder={placeholder}
            id={id}
            date={date}
            onDateChange={onDateChange}
            {...restProps}
          />
        </DesktopWrapper>
      );
    }}
  />
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
  mobileBreakpoint: PropTypes.number,
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string,
  // react-dates...
  id: PropTypes.string,
  date: PropTypes.shape({}),
  onDateChange: PropTypes.func
};

SingleDatePicker.defaultProps = {
  color: "red",
  mobileBreakpoint: breakpoints.md,
  numberOfMonths: 1,
  placeholder: "mm/dd/yyyy",
  // react-dates...
  id: null,
  date: null,
  onDateChange: null
};

export default SingleDatePicker;
