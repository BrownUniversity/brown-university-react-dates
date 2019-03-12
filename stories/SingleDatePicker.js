import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import SingleDatePickerContainer from "../src/components/utils/SingleDatePickerContainer";
import { SingleDatePicker } from "../src";

const renderSingleDatePicker = props => (
  <SingleDatePickerContainer {...props}>
    <SingleDatePicker />
  </SingleDatePickerContainer>
);

storiesOf("SingleDatePicker", module)
  .add("default", () => renderSingleDatePicker())
  .add("with initial date", () => renderSingleDatePicker({ date: moment() }));
