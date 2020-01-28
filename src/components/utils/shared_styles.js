import { css } from "styled-components";
import { colors, getRems, typography } from "brown-university-styles";

export const WeekHeaderCSS = css`
  & small {
    color: ${colors.darkGray};
    font-family: ${typography.sansBold};
    font-size: ${getRems(12)};
  }
`;

export const CalendarDayCSS = css`
  .CalendarDay,
  .CalendarDay:hover {
    border: none;
  }

  .CalendarDay__default {
    color: ${colors.black};
    font-family: ${typography.sansBold};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:hover {
    background-color: ${({ color }) => colors[color]};
    color: ${colors.white};
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:hover {
    color: ${colors.mediumGray};
  }

  .CalendarDay__highlighted_calendar {
    &:not(.CalendarDay__blocked_out_of_range, .CalendarDay__selected) {
      background-color: rgba(255, 199, 44, 0.65);

      &:hover {
        background-color: ${colors.gold};
      }
    }
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:hover {
    &:not(.CalendarDay__blocked_out_of_range) {
      color: ${colors.mediumGray};
      background-color: ${colors.transparentBlack};
    }
  }

  .DayPickerKeyboardShortcuts_show::before,
  .DayPickerKeyboardShortcuts_show:hover::before {
    border-right: 33px solid ${({ color }) => colors[color]};
  }

  .DayPickerKeyboardShortcuts_title {
    font-family: ${typography.sansBold};
  }

  .KeyboardShortcutRow {
    margin-bottom: 12px;
  }

  .KeyboardShortcutRow_keyContainer {
    display: inline;
    margin-right: 6px;
  }

  .KeyboardShortcutRow_key {
    background: ${colors.lightGray};
    padding: 2px 6px;
  }

  .KeyboardShortcutRow_action {
    display: inline;
    font-family: ${typography.sans};
  }
`;
