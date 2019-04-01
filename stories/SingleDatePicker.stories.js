import React from "react";
import moment from "moment";
import { breakpoints } from "brown-university-styles";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import SingleDatePickerContainer from "../src/components/utils/SingleDatePickerContainer";
import SingleDatePickerContainerWithValidation from "./components/SingleDatePickerContainerWithValidation";
import { SingleDatePicker } from "../src";

const getCommonProps = () => ({
  color: select("color", [
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]),
  mobileBreakpoint: number("mobileBreakpoint", breakpoints.md)
});

const renderSingleDatePicker = additionalProps => (
  <SingleDatePickerContainer {...additionalProps} {...getCommonProps()}>
    <SingleDatePicker />
  </SingleDatePickerContainer>
);

storiesOf("SingleDatePicker", module)
  .addDecorator(withKnobs)
  .add("default", () => renderSingleDatePicker())
  .add("with initial date", () => renderSingleDatePicker({ date: moment() }))
  .add("with 2 months", () => renderSingleDatePicker({ numberOfMonths: 2 }))
  .add("allowing all days, including past days", () =>
    renderSingleDatePicker({ isOutsideRange: () => false })
  )
  .add("highlighted Fridays", () =>
    renderSingleDatePicker({
      isDayHighlighted: day => moment.weekdays(day.weekday()) === "Friday"
    })
  )
  .add("blocking weekends", () =>
    renderSingleDatePicker({
      isDayBlocked: day =>
        ["Saturday", "Sunday"].includes(moment.weekdays(day.weekday()))
    })
  )
  .add("with validation", () => (
    <SingleDatePickerContainerWithValidation {...getCommonProps()}>
      <SingleDatePicker />
    </SingleDatePickerContainerWithValidation>
  ));
