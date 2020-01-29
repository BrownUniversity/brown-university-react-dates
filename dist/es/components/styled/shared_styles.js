import { css } from "styled-components";
import { colors, getRems, typography } from "brown-university-styles";
export var WeekHeaderCSS = css(["& small{color:", ";font-family:", ";font-size:", ";}"], colors.darkGray, typography.sansBold, getRems(12));
export var CalendarDayCSS = css([".CalendarDay,.CalendarDay:hover{border:none;}.CalendarDay__default{color:", ";font-family:", ";}.CalendarDay__selected,.CalendarDay__selected:hover{background-color:", ";color:", ";}.CalendarDay__blocked_out_of_range,.CalendarDay__blocked_out_of_range:hover{color:", ";}.CalendarDay__highlighted_calendar{&:not(.CalendarDay__blocked_out_of_range,.CalendarDay__selected){background-color:rgba(255,199,44,0.65);&:hover{background-color:", ";}}}.CalendarDay__blocked_calendar,.CalendarDay__blocked_calendar:hover{&:not(.CalendarDay__blocked_out_of_range){color:", ";background-color:", ";}}.DayPickerKeyboardShortcuts_show::before,.DayPickerKeyboardShortcuts_show:hover::before{border-right:33px solid ", ";}.DayPickerKeyboardShortcuts_title{font-family:", ";}.KeyboardShortcutRow{margin-bottom:12px;}.KeyboardShortcutRow_keyContainer{display:inline;margin-right:6px;}.KeyboardShortcutRow_key{background:", ";padding:2px 6px;}.KeyboardShortcutRow_action{display:inline;font-family:", ";}"], colors.black, typography.sansBold, function (_ref) {
  var color = _ref.color;
  return colors[color];
}, colors.white, colors.mediumGray, colors.gold, colors.mediumGray, colors.transparentBlack, function (_ref2) {
  var color = _ref2.color;
  return colors[color];
}, typography.sansBold, colors.lightGray, typography.sans);