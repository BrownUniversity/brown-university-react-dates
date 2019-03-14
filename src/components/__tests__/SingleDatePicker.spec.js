/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import { render } from "react-testing-library";
import SingleDatRangeContainer from "../utils/SingleDatePickerContainer";
import SingleDatePicker from "../SingleDatePicker";

/*
  Notes:
  - previous button has aria-label="Move backward to switch to the previous month."
  - next button has aria-label="Move backward to switch to the previous month."
  - dates have aria-label="Friday, March 1, 2019"
  - blocked out dates have aria-label="Not available. Tuesday, February 12, 2019"
*/

const renderSingleDatepicker = props => {
  const rtlUtils = render(
    <>
      <label htmlFor="single-date-picker-test">Date</label>
      <SingleDatRangeContainer id="single-date-picker-test" {...props}>
        <SingleDatePicker />
      </SingleDatRangeContainer>
    </>
  );

  return rtlUtils;
};

describe("SingleDatePicker", () => {
  // WIP
  it("renders", () => {
    const { getByLabelText } = renderSingleDatepicker();
    expect(getByLabelText("Date")).toBeInTheDocument(1);
  });
});
