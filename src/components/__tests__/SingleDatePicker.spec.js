/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import moment from "moment";
import { render } from "react-testing-library";
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
  const setupAndValidateDateChange = async ({ props = {}, date }) => {
    const rtlUtils = renderSingleDatepicker(props);
    const element = rtlUtils.getByLabelText("Date");

    await singleDatePickerTestUtils.makeSelection({
      element,
      date,
      ...rtlUtils
    });

    expect(element.value).toBe(
      date.format(singleDatePickerTestUtils.defaultDateFormat)
    );
  };

  describe("one month", () => {
    describe("with initial date", () => {
      it("updates date", async () => {
        await setupAndValidateDateChange({
          props: { initialDate: today },
          date: nextWeek
        });
      });
    });

    describe("without initial date", () => {
      it("sets date", async () => {
        await setupAndValidateDateChange({
          date: oneMonthFromNow
        });
      });
    });

    describe("allowing all days", () => {
      it("sets past date", async () => {
        await setupAndValidateDateChange({
          props: {
            isOutsideRange: () => false
          },
          date: sixMonthsAgo
        });
      });
    });
  });

  describe("two months", () => {
    describe("with initial date", () => {
      it("updates date", async () => {
        await setupAndValidateDateChange({
          props: { numberOfMonths: 2, initialDate: today },
          date: sixMonthsFromNow
        });
      });
    });

    describe("without initial date", () => {
      it("sets date", async () => {
        await setupAndValidateDateChange({
          props: {
            numberOfMonths: 2
          },
          date: oneYearFromNow
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
          date: oneYearAgo
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

    it("handles date change", async () => {
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
  });
});

describe("singleDatePickerTestUtils", () => {
  describe("empty date", () => {
    it("handles gracefully", async () => {
      const rtlUtils = renderSingleDatepicker({ initialDate: today });
      const element = rtlUtils.getByLabelText("Date");

      await singleDatePickerTestUtils.makeSelection({
        element,
        date: "",
        ...rtlUtils
      });

      expect(element.value).toBe("");
    });
  });

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
