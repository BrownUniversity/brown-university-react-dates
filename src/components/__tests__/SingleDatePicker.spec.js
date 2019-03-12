import React from "react";
import { render } from "react-testing-library";
import SingleDatePicker from "../SingleDatePicker";

const renderSingleDatepicker = () => {
  const rtlUtils = render(<SingleDatePicker />);
  return rtlUtils;
};

// TODO
describe("SingleDatePicker", () => {
  it("renders", () => {
    const { getByText } = renderSingleDatepicker();
    expect(getByText("Datepicker")).toBeInTheDocument();
  });
});
