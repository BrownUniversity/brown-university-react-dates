/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import moment from "moment";
import { render } from "react-testing-library";
import {
  makeSingleDatePickerSelection,
  defaultDateFormat
} from "single-date-picker-test-utils";
import SingleDatRangeContainer from "../utils/SingleDatePickerContainer";
import SingleDatePicker from "../SingleDatePicker";

// react-dates renders a month to either side of the currently visible month(s)
/*
const oneYearAgo = moment().subtract(1, "year");
const sixMonthsAgo = moment().subtract(6, "months");
const lastWeek = moment().subtract(1, "week");
*/
const today = moment();
const nextWeek = moment().add(1, "week");
/*
const sixMonthsFromNow = moment().add(6, "months");
const oneYearFromNow = moment().add(1, "year");
*/

const renderSingleDatepicker = props => {
  const id = "single-date-picker-test";
  const rtlUtils = render(
    <>
      <label htmlFor={id}>Date</label>
      <SingleDatRangeContainer id={id} {...props}>
        <SingleDatePicker />
      </SingleDatRangeContainer>
    </>
  );

  return rtlUtils;
};

describe("SingleDatePicker", () => {
  describe("one month", () => {
    describe("with initial date", () => {
      it("updates", async () => {
        const rtlUtils = renderSingleDatepicker({
          initialDate: today
        });
        const inputElement = rtlUtils.getByLabelText("Date");

        await makeSingleDatePickerSelection({
          element: inputElement,
          date: nextWeek,
          ...rtlUtils
        });

        expect(inputElement.value).toBe(nextWeek.format(defaultDateFormat));
      });
    });

    describe("without initial date", () => {
      // TODO
    });
  });

  describe("two months", () => {
    describe("with initial date", () => {
      // TODO
    });

    describe("without initial date", () => {
      // TODO
    });
  });
});
