import moment from "moment";
import { fireEvent } from "react-testing-library";

export const defaultDateFormat = "MM/DD/YYYY";

export async function makeSingleDatePickerSelection({
  element: inputElement,
  date: nextSelectionDate,
  format: nextSelectionFormat = defaultDateFormat,
  getByText,
  getByLabelText,
  queryByLabelText
}) {
  // input element info
  const isSelection = !!inputElement.value;
  // calendar element info
  const calendarAriaLabelText = "Calendar";
  const navPrevAriaLabelText = "Move backward to switch to the previous month.";
  const navNextAriaLabelText = "Move forward to switch to the next month.";
  const monthLabelFormat = "MMMM YYYY";
  const dateAriaLabelFormat = "dddd, MMMM D, YYYY";
  // moment objects
  const currentSelectionMoment = isSelection
    ? moment(inputElement.value, defaultDateFormat)
    : moment();
  const nextSelectionMoment = moment(nextSelectionDate, nextSelectionFormat);
  // navigation helpers
  const isNextSelectionMonthVisible = () => {
    try {
      getByText(nextSelectionMoment.format(monthLabelFormat));
      return true;
    } catch (e) {
      return false;
    }
  };
  const handleMonthNavigation = () => {
    if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
      fireEvent.click(getByLabelText(navPrevAriaLabelText));
    } else {
      fireEvent.click(getByLabelText(navNextAriaLabelText));
    }
  };

  // focus input (opens calendar)
  inputElement.focus();

  // validate calendar is open
  expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument();

  // navigate to next selection month
  while (!isNextSelectionMonthVisible()) {
    handleMonthNavigation();
  }

  // make next selection
  fireEvent.click(
    getByLabelText(nextSelectionMoment.format(dateAriaLabelFormat))
  );

  // blur input
  inputElement.blur();

  // validate calendar is closed
  expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();

  // validate selection
  expect(inputElement.value).toBe(
    nextSelectionMoment.format(defaultDateFormat)
  );
}
