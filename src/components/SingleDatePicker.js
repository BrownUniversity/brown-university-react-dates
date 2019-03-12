import PropTypes from "prop-types";
import React from "react";
import { SingleDatePicker as AirbnbSingleDatePicker } from "react-dates";

const SingleDatePicker = ({ placeholder, ...restProps }) => (
  <AirbnbSingleDatePicker
    numberOfMonths={1}
    placeholder={placeholder}
    {...restProps}
  />
);

SingleDatePicker.propTypes = {
  numberOfMonths: PropTypes.number,
  placeholder: PropTypes.string
};

SingleDatePicker.defaultProps = {
  numberOfMonths: 1,
  placeholder: "MM/DD/YYYY"
};

export default SingleDatePicker;
