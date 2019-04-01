/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import moment from "moment";
import { render, fireEvent } from "react-testing-library";
import { triggerWindowResize, resetWindowSize } from "window-test-utils";
import { breakpoints } from "brown-university-styles";
import SingleDatePickerContainer from "../utils/SingleDatePickerContainer";
import SingleDatePicker from "../SingleDatePicker";
import singleDatePickerTestUtils from "../../test-utils/single-date-picker";

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
  const setupAndValidateDateChange = async ({ props = {}, nextDate }) => {
    const rtlUtils = renderSingleDatepicker(props);
    const element = rtlUtils.getByLabelText("Date");

    await singleDatePickerTestUtils.makeSelection({
      element,
      date: nextDate,
      ...rtlUtils
    });

    if (nextDate) {
      expect(element.value).toBe(
        nextDate.format(singleDatePickerTestUtils.defaultDateFormat)
      );
    } else {
      expect(element.value).toBe("");
    }
  };

  describe("one month", () => {
    describe("without initial date", () => {
      it("sets date", async () => {
        await setupAndValidateDateChange({
          nextDate: oneMonthFromNow
        });
      });
    });

    describe("with initial date", () => {
      it("updates date", async () => {
        await setupAndValidateDateChange({
          props: { date: today },
          nextDate: nextWeek
        });
      });

      it("clears date", async () => {
        await setupAndValidateDateChange({
          props: { date: today },
          nextDate: null
        });
      });
    });

    describe("allowing all days", () => {
      it("sets past date", async () => {
        await setupAndValidateDateChange({
          props: {
            isOutsideRange: () => false
          },
          nextDate: sixMonthsAgo
        });
      });
    });
  });

  describe("two months", () => {
    describe("without initial date", () => {
      it("sets date", async () => {
        await setupAndValidateDateChange({
          props: {
            numberOfMonths: 2
          },
          nextDate: oneYearFromNow
        });
      });
    });

    describe("with initial date", () => {
      it("updates date", async () => {
        await setupAndValidateDateChange({
          props: { numberOfMonths: 2, date: today },
          nextDate: sixMonthsFromNow
        });
      });

      it("clears date", async () => {
        await setupAndValidateDateChange({
          props: { numberOfMonths: 2, date: today },
          nextDate: null
        });
      });
    });

    describe("allowing all days", () => {
      it("sets past date", async () => {
        await setupAndValidateDateChange({
          props: {
            numberOfMonths: 2,
            isOutsideRange: () => false
          },
          nextDate: oneYearAgo
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

    it("sets date", async () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");
      const nextValue = today.format("YYYY-MM-DD");

      await singleDatePickerTestUtils.makeSelection({
        element,
        date: today,
        ...rtlUtils
      });

      expect(element.value).toBe(nextValue);
    });

    it("updates date", async () => {
      const rtlUtils = renderSingleDatepicker({
        props: { date: today }
      });
      const element = rtlUtils.getByLabelText("Date");
      const nextValue = nextWeek.format("YYYY-MM-DD");

      await singleDatePickerTestUtils.makeSelection({
        element,
        date: nextWeek,
        ...rtlUtils
      });

      expect(element.value).toBe(nextValue);
    });

    it("clears date", async () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      await singleDatePickerTestUtils.makeSelection({
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

    it("handles gracefully with warning", async () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      await singleDatePickerTestUtils.makeSelection({
        element,
        date: yesterday,
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

    it("handles gracefully without warning", async () => {
      const rtlUtils = renderSingleDatepicker();
      const element = rtlUtils.getByLabelText("Date");

      await singleDatePickerTestUtils.makeSelection({
        element,
        date: yesterday,
        ...rtlUtils,
        warnings: false
      });

      // eslint-disable-next-line no-console
      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
