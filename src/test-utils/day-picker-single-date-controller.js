import moment from "moment";
import { fireEvent } from "@testing-library/react";
import { navigateMonth, handleWarnings } from "./shared";

const defaultDateFormat = "dddd, MMMM D, YYYY";

function makeSelection({
  date: nextSelectionDate,
  warnings = true,
  // @testing-library/react...
  getByText,
  getByLabelText
}) {
  const nextSelectionMoment = moment(nextSelectionDate, defaultDateFormat);

  // navigate to next selection month
  navigateMonth(
    nextSelectionMoment,
    moment(),
    fireEvent,
    getByLabelText,
    getByText
  );

  // attempt next selection...
  try {
    fireEvent.click(getByLabelText(nextSelectionDate));
  } catch (e) {
    handleWarnings(warnings, nextSelectionDate);
  }

  return undefined;
}

export default {
  defaultDateFormat,
  makeSelection
};
