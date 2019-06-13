import moment from "moment";
import { fireEvent } from "@testing-library/react";
var defaultDateFormat = "MM/DD/YYYY";
export var isoDateFormat = "YYYY-MM-DD";

function makeSelection(_ref) {
  var inputElement = _ref.element,
      nextSelectionDate = _ref.date,
      _ref$format = _ref.format,
      nextSelectionFormat = _ref$format === void 0 ? defaultDateFormat : _ref$format,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? true : _ref$warnings,
      getByText = _ref.getByText,
      getByLabelText = _ref.getByLabelText,
      queryByLabelText = _ref.queryByLabelText;

  /*
    handle empty date selection
  */
  if (!nextSelectionDate) {
    return fireEvent.change(inputElement, {
      target: {
        value: ""
      }
    });
  }
  /*
    handle mobile date selection
  */


  if (inputElement.type === "date") {
    return fireEvent.change(inputElement, {
      target: {
        value: moment(nextSelectionDate, nextSelectionFormat).format(isoDateFormat)
      }
    });
  }
  /*
    handle desktop date selection
  */
  // input element info


  var isSelection = !!inputElement.value; // calendar element info

  var calendarAriaLabelText = "Calendar";
  var navPrevAriaLabelText = "Move backward to switch to the previous month.";
  var navNextAriaLabelText = "Move forward to switch to the next month.";
  var monthLabelFormat = "MMMM YYYY";
  var dateAriaLabelFormat = "dddd, MMMM D, YYYY"; // moment objects

  var currentSelectionMoment = isSelection ? moment(inputElement.value, defaultDateFormat) : moment();
  var nextSelectionMoment = moment(nextSelectionDate, nextSelectionFormat); // navigation helpers

  var isNextSelectionMonthVisible = function isNextSelectionMonthVisible() {
    try {
      getByText(nextSelectionMoment.format(monthLabelFormat));
      return true;
    } catch (e) {
      return false;
    }
  };

  var handleMonthNavigation = function handleMonthNavigation() {
    if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
      fireEvent.click(getByLabelText(navPrevAriaLabelText));
    } else {
      fireEvent.click(getByLabelText(navNextAriaLabelText));
    }
  }; // focus input (opens calendar)


  inputElement.focus(); // validate calendar is open

  expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument(); // navigate to next selection month

  while (!isNextSelectionMonthVisible()) {
    handleMonthNavigation();
  } // attempt next selection...


  var nextSelectionLabelText = nextSelectionMoment.format(dateAriaLabelFormat);

  try {
    // make next selection
    fireEvent.click(getByLabelText(nextSelectionLabelText)); // validate calendar is closed

    expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
  } catch (e) {
    // warn consumer if they have not disabled warnings
    if (warnings) {
      // eslint-disable-next-line no-console
      console.warn("Unable to select `date` with aria-label \"".concat(nextSelectionLabelText, "\". If this is the expected result, then set `warnings` to false in this call to `singleDatePickerTestUtils.makeSelection`."));
    }
  } finally {
    // blur input
    inputElement.blur();
  }

  return undefined;
}

export default {
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
};