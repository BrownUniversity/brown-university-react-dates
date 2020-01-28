import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import DayPickerSingleDateControllerContainer from "../src/components/utils/DayPickerSingleDateControllerContainer";
import { DayPickerSingleDateController } from "../src";

const getCommonProps = () => ({
  color: select("color", [
    "darkEmerald",
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ])
});

const renderSingleDatePicker = additionalProps => (
  <DayPickerSingleDateControllerContainer
    {...additionalProps}
    {...getCommonProps()}
  >
    <DayPickerSingleDateController />
  </DayPickerSingleDateControllerContainer>
);

storiesOf("DayPickerSingleDateController", module)
  .addDecorator(withKnobs)
  .add("default", () => renderSingleDatePicker())
  .add("with initial date", () => renderSingleDatePicker({ date: moment() }))
  .add("with outside days", () =>
    renderSingleDatePicker({ enableOutsideDays: true })
  )
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
  );
