import React from "react";
import moment from "moment";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SingleDatePickerContainer from "../../src/components/utils/SingleDatePickerContainer";

Yup.setLocale({
  mixed: {
    notType: "Invalid"
  }
});

const TimePickerContainerWithValidation = props => (
  <Formik
    initialValues={{ date: undefined }}
    validationSchema={Yup.object().shape({
      date: Yup.date()
        .transform((value, originalValue) => {
          const date = moment(originalValue, "YYYY-MM-DD");
          return date.isValid() ? date.toDate() : new Date("");
        })
        .required("Required")
    })}
  >
    {({ values, setFieldValue, setFieldTouched }) => (
      <Form>
        <SingleDatePickerContainer
          date={values.date}
          onDateChange={nextDate => {
            setFieldValue("date", nextDate);
          }}
          onFocusChange={({ focused }) => {
            if (!focused) {
              setFieldTouched("date");
            }
          }}
          {...props}
        />
        <ErrorMessage
          name="date"
          component="div"
          style={{ color: "red", marginTop: 10 }}
        />
      </Form>
    )}
  </Formik>
);

export default TimePickerContainerWithValidation;
