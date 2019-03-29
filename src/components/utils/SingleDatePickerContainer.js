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
  children,
  ...restProps
}) => {
  const [date, setDate] = useState(initialDate);
  const [focused, setFocused] = useState(initialFocused);

  const onDateChange = nextDate => {
    setDate(nextDate);
  };

  const onFocusChange = ({ focused: nextFocused }) => {
    setFocused(nextFocused);
  };

  return React.cloneElement(children, {
    id,
    date,
    onDateChange,
    focused,
    onFocusChange,
    ...restProps
  });
};

export default SingleDatePickerContainer;
