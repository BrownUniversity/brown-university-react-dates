import React, { useState } from "react";
import { bool, func, node, shape } from "prop-types";
import DayPickerSingleDateController from "../DayPickerSingleDateController";

/*
  NOTE: This component is just for tests and stories inside this repo;
  however, it can serve as an example of the minimal implementation of
  the `DayPickerSingleDateController` component.
*/

const DayPickerSingleDateControllerContainer = ({
  date: initialDate = null,
  focused: initialFocused = true,
  onDateChange = () => undefined,
  onFocusChange = () => undefined,
  children,
  ...restProps
}) => {
  const [date, setDate] = useState(initialDate);
  const [focused, setFocused] = useState(initialFocused);

  const handleDateChange = nextDate => {
    setDate(nextDate);
    onDateChange(nextDate);
  };

  const handleFocusChange = ({ focused: nextFocused }) => {
    setFocused(nextFocused);
    onFocusChange({ focused: nextFocused });
  };

  return (
    <div>
      <p>
        {date
          ? `Selected Date: ${date.format("dddd, MMMM D, YYYY")}`
          : "No date selected"}
      </p>
      <DayPickerSingleDateController
        date={date}
        onDateChange={handleDateChange}
        focused={focused}
        onFocusChange={handleFocusChange}
        {...restProps}
      />
    </div>
  );
};

DayPickerSingleDateControllerContainer.propTypes = {
  date: shape({}),
  focused: bool,
  onDateChange: func,
  onFocusChange: func,
  children: node.isRequired
};

DayPickerSingleDateControllerContainer.defaultProps = {
  date: null,
  focused: true,
  onDateChange: undefined,
  onFocusChange: undefined
};

export default DayPickerSingleDateControllerContainer;
