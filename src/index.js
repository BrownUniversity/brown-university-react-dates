import {
  defaultDateFormat,
  makeSingleDatePickerSelection
} from "../jest/utils/single-date-picker-test-utils";

export { default as SingleDatePicker } from "./components/SingleDatePicker";

export const singleDatePickerTestUtils = {
  makeSelection: makeSingleDatePickerSelection,
  defaultDateFormat
};
