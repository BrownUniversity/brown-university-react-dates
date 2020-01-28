import moment from "moment";
import { fireEvent } from "@testing-library/react";
import { navigateMonth, getDateLabelText, handleWarnings } from "./shared";

const defaultDateFormat = "MM/DD/YYYY";
export const isoDateFormat = "YYYY-MM-DD";

function makeSelection({
  element: inputElement,
  date: nextSelectionDate,
  format: nextSelectionFormat = defaultDateFormat,
  warnings = true,
  // @testing-library/react...
  getByText,
  getByLabelText,
  queryByLabelText
}) {
  /*
    handle empty date selection
  */
  if (!nextSelectionDate) {
    return fireEvent.change(inputElement, {
      target: { value: "" }
    });
  }

  /*
    handle mobile date selection
  */
  if (inputElement.type === "date") {
    return fireEvent.change(inputElement, {
      target: {
        value: moment(nextSelectionDate, nextSelectionFormat).format(
          isoDateFormat
        )
      }
    });
  }

  /*
    handle desktop date selection
  */
  // input element info
  const isSelection = !!inputElement.value;

  // calendar element info
  const calendarAriaLabelText = "Calendar";

  // moment objects
  const currentSelectionMoment = isSelection
    ? moment(inputElement.value, defaultDateFormat)
    : moment();
  const nextSelectionMoment = moment(nextSelectionDate, nextSelectionFormat);

  // focus input (opens calendar)
  inputElement.focus();

  // validate calendar is open
  expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument();

  // navigate to next selection month
  navigateMonth(
    nextSelectionMoment,
    currentSelectionMoment,
    fireEvent,
    getByLabelText,
    getByText
  );

  // attempt next selection...
  const nextSelectionLabelText = getDateLabelText(nextSelectionMoment);

  try {
    // make next selection
    fireEvent.click(getByLabelText(nextSelectionLabelText));
    // validate calendar is closed
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
  defaultDateFormat,
  makeSelection
};
