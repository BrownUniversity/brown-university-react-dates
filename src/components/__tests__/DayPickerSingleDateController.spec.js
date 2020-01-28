import React from "react";
import { render } from "@testing-library/react";
import DayPickerSingleDateControllerContainer from "../utils/DayPickerSingleDateControllerContainer";
import DayPickerSingleDateController from "../DayPickerSingleDateController";
import {
  oneYearAgo,
  sixMonthsAgo,
  yesterday,
  today,
  nextWeek,
  oneMonthFromNow,
  sixMonthsFromNow,
  oneYearFromNow
} from "../../test-utils/shared";
import dayPickerSingleDateControllerTestUtils from "../../test-utils/day-picker-single-date-controller";

const renderDayPickerSingleDateController = props => {
  const rtlUtils = render(
    <DayPickerSingleDateControllerContainer {...props}>
      <DayPickerSingleDateController />
    </DayPickerSingleDateControllerContainer>
  );

  return rtlUtils;
};

describe("DayPickerSingleDateController", () => {
  const setupAndValidateDateChange = ({ props = {}, nextDateMomentObj }) => {
    const rtlUtils = renderDayPickerSingleDateController(props);
    const date = nextDateMomentObj
      ? nextDateMomentObj.format(
          dayPickerSingleDateControllerTestUtils.defaultDateFormat
        )
      : null;

    dayPickerSingleDateControllerTestUtils.makeSelection({
      date,
      ...rtlUtils
    });

    if (date) {
      rtlUtils.getByText(`Selected Date: ${date}`);
    } else {
      rtlUtils.getByText("No date selected");
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
});

describe("dayPickerSingleDateControllerTestUtils", () => {
  describe("blocked date", () => {
    beforeEach(() => {
      global.console = { warn: jest.fn() };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("handles gracefully with warning", () => {
      const rtlUtils = renderDayPickerSingleDateController();

      dayPickerSingleDateControllerTestUtils.makeSelection({
        date: yesterday.format(
          dayPickerSingleDateControllerTestUtils.defaultDateFormat
        ),
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
      const rtlUtils = renderDayPickerSingleDateController();

      dayPickerSingleDateControllerTestUtils.makeSelection({
        date: yesterday.format(
          dayPickerSingleDateControllerTestUtils.defaultDateFormat
        ),
        ...rtlUtils,
        warnings: false
      });

      // eslint-disable-next-line no-console
      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
