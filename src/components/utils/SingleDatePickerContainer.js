import React, { useState } from "react";

/*
  NOTE: This component is just for tests and stories inside this repo;
  however, it can serve as an example of the minimal implementation of
  the `SingleDatePicker` component (aside from the use of `React.cloneElement`).
*/

const SingleDatePickerContainer = ({
  id = "single-date-picker",
  date: initialDate = null,
  focused: initialFocused = false,
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

  return React.cloneElement(children, {
    id,
    date,
    onDateChange: handleDateChange,
    focused,
    onFocusChange: handleFocusChange,
    ...restProps
  });
};

export default SingleDatePickerContainer;
