import { configure } from "@storybook/react";
import "brown-university-styles/dist/styles.css";

function loadStories() {
  require("../stories/Todo");
}

configure(loadStories, module);
