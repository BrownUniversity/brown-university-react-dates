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
import { WeekHeaderCSS, CalendarDayCSS } from "./utils/shared_styles";

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
    ${WeekHeaderCSS}
  }

  ${CalendarDayCSS}

  .CalendarDay__selected,
  .CalendarDay__selected:hover {
    border-radius: 20px;
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
  onFocusChange,
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
                // handle invalid date
                onDateChange(null);
              }
            }}
            onBlur={() => onFocusChange({ focused: false })}
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
            onFocusChange={onFocusChange}
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
    "darkEmerald",
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
