import { addParameters, configure } from "@storybook/react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "brown-university-styles/dist/styles.css";
import { version } from "../package.json";

/*
  customize name
*/
addParameters({
  options: {
    name: `Brown University React Dates ${version}`
  }
});

/*
  automatically import all files ending in `*.stories.js` from `stories` directory
*/
const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
