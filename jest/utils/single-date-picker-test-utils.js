import moment from "moment";
import { breakpoints } from "brown-university-styles";
import { fireEvent } from "react-testing-library";

export const defaultDateFormat = "MM/DD/YYYY";

export async function makeSingleDatePickerSelection({
  element: inputElement,
  date: nextSelectionDate,
  format: nextSelectionFormat = defaultDateFormat,
  warnings = true,
  // react-testing-library...
  getByText,
  getByLabelText,
  queryByLabelText
}) {
  if (global.window.innerWidth < breakpoints.md) {
    throw new Error(
      `\`<SingleDatePicker />\` renders as a native date input below a window width of ${
        breakpoints.md
      }px.`
    );
  }

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

  // attempt next selection...
  const nextSelectionLabelText = nextSelectionMoment.format(
    dateAriaLabelFormat
  );

  try {
    // make next selection
    fireEvent.click(getByLabelText(nextSelectionLabelText));
    // validate calendar is closed
    expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
  } catch (e) {
    // warn consumer if they have not disabled warnings
    if (warnings) {
      // eslint-disable-next-line no-console
      console.warn(
        `Unable to select \`date\` with aria-label "${nextSelectionLabelText}". If this is the expected result, then set \`warnings\` to false in this call to \`makeSingleDatePickerSelection\`.`
      );
    }
  } finally {
    // blur input
    inputElement.blur();
  }
}
