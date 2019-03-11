import React from "react";
import { render } from "react-testing-library";
import Todo from "../Todo";

const renderTodo = () => {
  const rtlUtils = render(<Todo />);
  return rtlUtils;
};

describe("Todo", () => {
  it("renders", () => {
    const { getByText } = renderTodo();
    expect(getByText("TODO")).toBeInTheDocument();
  });
});
