import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import SingleDatePickerContainer from "../src/components/utils/SingleDatePickerContainer";
import { SingleDatePicker } from "../src";

const getCommonProps = () => ({
  color: select("color", ["red", "idRed"])
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
  .add("with 2 months", () => renderSingleDatePicker({ numberOfMonths: 2 }));
