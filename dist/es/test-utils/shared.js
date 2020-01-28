import moment from "moment"; // `react-dates` renders a month to either side of the currently visible month(s)

export var oneYearAgo = moment().subtract(1, "year");
export var sixMonthsAgo = moment().subtract(6, "months");
export var yesterday = moment().subtract(1, "day");
export var today = moment();
export var nextWeek = moment().add(1, "week");
export var oneMonthFromNow = moment().add(1, "month");
export var sixMonthsFromNow = moment().add(6, "months");
export var oneYearFromNow = moment().add(1, "year"); // navigation helpers

var isNextSelectionMonthVisible = function isNextSelectionMonthVisible(nextSelectionMoment, getByText) {
  try {
    getByText(nextSelectionMoment.format("MMMM YYYY"));
    return true;
  } catch (e) {
    return false;
  }
};

export var navigateMonth = function navigateMonth(nextSelectionMoment, currentSelectionMoment, fireEvent, getByLabelText, getByText) {
  while (!isNextSelectionMonthVisible(nextSelectionMoment, getByText)) {
    if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
      fireEvent.click(getByLabelText("Move backward to switch to the previous month."));
    } else {
      fireEvent.click(getByLabelText("Move forward to switch to the next month."));
    }
  }
};
export var getDateLabelText = function getDateLabelText(date) {
  return date.format("dddd, MMMM D, YYYY");
}; // warn consumer if they have not disabled warnings

export var handleWarnings = function handleWarnings(warnings, nextSelectionLabelText) {
  if (warnings) {
    // eslint-disable-next-line no-console
    console.warn("Unable to select `date` with aria-label \"".concat(nextSelectionLabelText, "\". If this is the expected result, then set `warnings` to false in this call to `singleDatePickerTestUtils.makeSelection`."));
  }
};