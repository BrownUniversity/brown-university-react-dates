import moment from "moment";
import { fireEvent } from "@testing-library/react";
import { navigateMonth, handleWarnings } from "./shared";
var defaultDateFormat = "dddd, MMMM D, YYYY";

function makeSelection(_ref) {
  var nextSelectionDate = _ref.date,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? true : _ref$warnings,
      getByText = _ref.getByText,
      getByLabelText = _ref.getByLabelText;
  var nextSelectionMoment = moment(nextSelectionDate, defaultDateFormat); // navigate to next selection month

  navigateMonth(nextSelectionMoment, moment(), fireEvent, getByLabelText, getByText); // attempt next selection...

  try {
    fireEvent.click(getByLabelText(nextSelectionDate));
  } catch (e) {
    handleWarnings(warnings, nextSelectionDate);
  }

  return undefined;
}

export default {
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
};