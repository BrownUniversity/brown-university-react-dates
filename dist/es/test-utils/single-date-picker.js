function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import moment from "moment";
import { fireEvent } from "react-testing-library";
var defaultDateFormat = "MM/DD/YYYY";

function makeSelection(_x) {
  return _makeSelection.apply(this, arguments);
}

function _makeSelection() {
  _makeSelection = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var inputElement, nextSelectionDate, _ref$format, nextSelectionFormat, _ref$warnings, warnings, getByText, getByLabelText, queryByLabelText, isSelection, calendarAriaLabelText, navPrevAriaLabelText, navNextAriaLabelText, monthLabelFormat, dateAriaLabelFormat, currentSelectionMoment, nextSelectionMoment, isNextSelectionMonthVisible, handleMonthNavigation, nextSelectionLabelText;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputElement = _ref.element, nextSelectionDate = _ref.date, _ref$format = _ref.format, nextSelectionFormat = _ref$format === void 0 ? defaultDateFormat : _ref$format, _ref$warnings = _ref.warnings, warnings = _ref$warnings === void 0 ? true : _ref$warnings, getByText = _ref.getByText, getByLabelText = _ref.getByLabelText, queryByLabelText = _ref.queryByLabelText;

            if (nextSelectionDate) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", fireEvent.change(inputElement, {
              target: {
                value: ""
              }
            }));

          case 3:
            if (!(inputElement.type === "date")) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", fireEvent.change(inputElement, {
              target: {
                value: nextSelectionDate.format("YYYY-MM-DD")
              }
            }));

          case 5:
            /*
              handle desktop date selection
            */
            // input element info
            isSelection = !!inputElement.value; // calendar element info

            calendarAriaLabelText = "Calendar";
            navPrevAriaLabelText = "Move backward to switch to the previous month.";
            navNextAriaLabelText = "Move forward to switch to the next month.";
            monthLabelFormat = "MMMM YYYY";
            dateAriaLabelFormat = "dddd, MMMM D, YYYY"; // moment objects

            currentSelectionMoment = isSelection ? moment(inputElement.value, defaultDateFormat) : moment();
            nextSelectionMoment = moment(nextSelectionDate, nextSelectionFormat); // navigation helpers

            isNextSelectionMonthVisible = function isNextSelectionMonthVisible() {
              try {
                getByText(nextSelectionMoment.format(monthLabelFormat));
                return true;
              } catch (e) {
                return false;
              }
            };

            handleMonthNavigation = function handleMonthNavigation() {
              if (nextSelectionMoment.isBefore(currentSelectionMoment, "month")) {
                fireEvent.click(getByLabelText(navPrevAriaLabelText));
              } else {
                fireEvent.click(getByLabelText(navNextAriaLabelText));
              }
            }; // focus input (opens calendar)


            inputElement.focus(); // validate calendar is open

            expect(getByLabelText(calendarAriaLabelText)).toBeInTheDocument(); // navigate to next selection month

            while (!isNextSelectionMonthVisible()) {
              handleMonthNavigation();
            } // attempt next selection...


            nextSelectionLabelText = nextSelectionMoment.format(dateAriaLabelFormat);

            try {
              // make next selection
              fireEvent.click(getByLabelText(nextSelectionLabelText)); // validate calendar is closed

              expect(queryByLabelText(calendarAriaLabelText)).not.toBeInTheDocument();
            } catch (e) {
              // warn consumer if they have not disabled warnings
              if (warnings) {
                // eslint-disable-next-line no-console
                console.warn("Unable to select `date` with aria-label \"".concat(nextSelectionLabelText, "\". If this is the expected result, then set `warnings` to false in this call to `singleDatePickerTestUtils.makeSelection`."));
              }
            } finally {
              // blur input
              inputElement.blur();
            }

            return _context.abrupt("return", undefined);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeSelection.apply(this, arguments);
}

export default {
  defaultDateFormat: defaultDateFormat,
  makeSelection: makeSelection
};