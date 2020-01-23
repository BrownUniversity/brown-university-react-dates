import moment from "moment";

// `react-dates` renders a month to either side of the currently visible month(s)
export const oneYearAgo = moment().subtract(1, "year");
export const sixMonthsAgo = moment().subtract(6, "months");
export const yesterday = moment().subtract(1, "day");
export const today = moment();
export const nextWeek = moment().add(1, "week");
export const oneMonthFromNow = moment().add(1, "month");
export const sixMonthsFromNow = moment().add(6, "months");
export const oneYearFromNow = moment().add(1, "year");

// navigation helpers
const isNextSelectionMonthVisible = (nextSelectionMoment, getByText) => {
  try {
    getByText(nextSelectionMoment.format("MMMM YYYY"));
    return true;
  } catch (e) {
    return false;
  }
};

export const navigateMonth = (
  nextSelectionMoment,
  currentSelectionMoment,
  fireEvent,
  getByLabelText,
  getByText
) => {
  while (!isNextSelectionMonthVisible(nextSelectionMoment, getByText)) {
    if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
      fireEvent.click(
        getByLabelText("Move backward to switch to the previous month.")
      );
    } else {
      fireEvent.click(
        getByLabelText("Move forward to switch to the next month.")
      );
    }
  }
};

export const getDateLabelText = date => date.format("dddd, MMMM D, YYYY");

// warn consumer if they have not disabled warnings
export const handleWarnings = (warnings, nextSelectionLabelText) => {
  if (warnings) {
    // eslint-disable-next-line no-console
    console.warn(
      `Unable to select \`date\` with aria-label "${nextSelectionLabelText}". If this is the expected result, then set \`warnings\` to false in this call to \`singleDatePickerTestUtils.makeSelection\`.`
    );
  }
};
