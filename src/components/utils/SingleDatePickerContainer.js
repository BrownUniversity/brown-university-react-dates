import React, { useState } from "react";

const SingleDatePickerContainer = ({
  id = "single-date-picker-story",
  initialDate = null,
  initialFocus = false,
  children,
  ...restProps
}) => {
  const [date, setDate] = useState(initialDate);
  const [focused, setFocused] = useState(initialFocus);

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
