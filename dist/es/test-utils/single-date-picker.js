import moment from "moment";
import { fireEvent } from "@testing-library/react";
import { navigateMonth, getDateLabelText, handleWarnings } from "./shared";
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

  var calendarAriaLabelText = "Calendar"; // moment objects

  var currentSelectionMoment = isSelection ? moment(inputElement.value, defaultDateFormat) : moment();
  var nextSelectionMoment = moment(nextSelectionDate, nextSelectionFormat); // focus input (opens calendar)

  inputElement.focus(); // validate calendar is open

  expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument(); // navigate to next selection month

  navigateMonth(nextSelectionMoment, currentSelectionMoment, fireEvent, getByLabelText, getByText); // attempt next selection...

  var nextSelectionLabelText = getDateLabelText(nextSelectionMoment);

  try {
    // make next selection
    fireEvent.click(getByLabelText(nextSelectionLabelText)); // validate calendar is closed

    expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
  } catch (e) {
    handleWarnings(warnings, nextSelectionLabelText);
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