import React from "react";
import { render } from "react-testing-library";
import SingleDatRangeContainer from "../utils/SingleDatePickerContainer";
import SingleDatePicker from "../SingleDatePicker";

const renderSingleDatepicker = () => {
  const rtlUtils = render(
    <SingleDatRangeContainer>
      <SingleDatePicker />
    </SingleDatRangeContainer>
  );
  return rtlUtils;
};

// TODO
describe("SingleDatePicker", () => {
  it("renders", () => {
    const { debug } = renderSingleDatepicker();
    debug();
    expect(1).toBe(1);
  });
});
