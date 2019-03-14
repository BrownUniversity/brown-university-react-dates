import { configure } from "@storybook/react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "brown-university-styles/dist/styles.css";

function loadStories() {
  require("../stories/SingleDatePicker");
}

configure(loadStories, module);
