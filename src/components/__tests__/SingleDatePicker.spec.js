/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";
import { triggerWindowResize, resetWindowSize } from "window-test-utils";
import { breakpoints } from "brown-university-styles";
import SingleDatePickerContainer from "../utils/SingleDatePickerContainer";
import SingleDatePicker from "../SingleDatePicker";
import singleDatePickerTestUtils, {
  isoDateFormat
} from "../../test-utils/single-date-picker";

// `react-dates` renders a month to either side of the currently visible month(s)
const oneYearAgo = moment().subtract(1, "year");
const sixMonthsAgo = moment().subtract(6, "months");
const yesterday = moment().subtract(1, "day");
const today = moment();
const nextWeek = moment().add(1, "week");
const oneMonthFromNow = moment().add(1, "month");
const sixMonthsFromNow = moment().add(6, "months");
const oneYearFromNow = moment().add(1, "year");

const renderSingleDatepicker = props => {
  const id = "single-date-picker-test";
  const rtlUtils = render(
    <>
      <label htmlFor={id}>Date</label>
      <SingleDatePickerContainer id={id} {...props}>
        <SingleDatePicker />
      </SingleDatePickerContainer>
    </>
  );

  return rtlUtils;
};

describe("SingleDatePicker", () => {
  const setupAndValidateDateChange = ({ props = {}, nextDateMomentObj }) => {
    const rtlUtils = renderSingleDatepicker(props);
    const element = rtlUtils.getByLabelText("Date");
    const date = nextDateMomentObj
      ? nextDateMomentObj.format(singleDatePickerTestUtils.defaultDateFormat)
      : null;

    singleDatePickerTestUtils.makeSelection({
      element,
      date,
      ...rtlUtils
    });

    if (date) {
      expect(element.value).toBe(date);
    } else {
      expect(element.value).toBe("");
    }
  };

  describe("one month", () => {
    describe("without initial date", () => {
      it("sets date", () => {
        setupAndValidateDateChange({
          nextDateMomentObj: oneMonthFromNow
        });
      });
    });

    describe("with initial date", () => {
      it("updates date", () => {
        setupAndValidateDateChange({
          props: { date: today },
          nextDateMomentObj: nextWeek
        });
      });

      it("clears date", () => {
        setupAndValidateDateChange({
          props: { date: today },
          nextDateMomentObj: null
        });
      });
    });

    describe("allowing all days", () => {
      it("sets past date", () => {
        setupAndValidateDateChange({
          props: {
            isOutsideRange: () => false
          },
          nextDateMomentObj: sixMonthsAgo
        });
      });
    });
  });

  describe("two months", () => {
    describe("without initial date", () => {
      it("sets date", () => {
        setupAndValidateDateChange({
          props: {
            numberOfMonths: 2
          },
          nextDateMomentObj: oneYearFromNow
        });
      });
    });

    describe("with initial date", () => {
      it("updates date", () => {
        setupAndValidateDateChange({
          props: { numberOfMonths: 2, date: today },
          nextDateMomentObj: sixMonthsFromNow
        });
      });

      it("clears date", () => {
        setupAndValidateDateChange({
          props: { numberOfMonths: 2, date: today },
          nextDateMomentObj: null
        });
      });
    });

    describe("allowing all days", () => {
      it("sets past date", () => {
        setupAndValidateDateChange({
          props: {
            numberOfMonths: 2,
            isOutsideRange: () => false
          },
          nextDateMomentObj: oneYearAgo
        });
      });
    });
  });

  describe("mobile", () => {
    beforeAll(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    afterAll(() => {
      resetWindowSize();
    });

    it("falls back to native date input", () => {
      const { getByLabelText } = renderSingleDatepicker();
      expect(getByLabelText("Date")).toHaveAttribute("type", "date");
    });

    it("sets date", () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      singleDatePickerTestUtils.makeSelection({
        element,
        date: today.format(singleDatePickerTestUtils.defaultDateFormat),
        ...rtlUtils
      });

      expect(element.value).toBe(today.format(isoDateFormat));
    });

    it("updates date", () => {
      const rtlUtils = renderSingleDatepicker({
        props: { date: today }
      });
      const element = rtlUtils.getByLabelText("Date");

      singleDatePickerTestUtils.makeSelection({
        element,
        date: nextWeek.format(singleDatePickerTestUtils.defaultDateFormat),
        ...rtlUtils
      });

      expect(element.value).toBe(nextWeek.format(isoDateFormat));
    });

    it("clears date", () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      singleDatePickerTestUtils.makeSelection({
        element,
        date: null,
        ...rtlUtils
      });

      expect(element.value).toBe("");
    });

    it("calls `onFocusChange` with `{ focused: false }` on blur", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderSingleDatepicker({ onFocusChange });

      fireEvent.blur(getByLabelText("Date"));

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({ focused: false });
    });
  });
});

describe("singleDatePickerTestUtils", () => {
  describe("blocked date", () => {
    beforeEach(() => {
      global.console = { warn: jest.fn() };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("handles gracefully with warning", () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      singleDatePickerTestUtils.makeSelection({
        element,
        date: yesterday.format(singleDatePickerTestUtils.defaultDateFormat),
        ...rtlUtils
      });

      /* eslint-disable no-console */
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect(console.warn).toHaveBeenCalledWith(
        `Unable to select \`date\` with aria-label "${yesterday.format(
          "dddd, MMMM D, YYYY"
        )}". If this is the expected result, then set \`warnings\` to false in this call to \`singleDatePickerTestUtils.makeSelection\`.`
      );
      /* eslint-enable no-console */
    });

    it("handles gracefully without warning", () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      singleDatePickerTestUtils.makeSelection({
        element,
        date: yesterday.format(singleDatePickerTestUtils.defaultDateFormat),
        ...rtlUtils,
        warnings: false
      });

      // eslint-disable-next-line no-console
      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
