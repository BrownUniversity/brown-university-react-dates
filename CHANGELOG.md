# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.2.0 - 2020-01-28

### Added

- `<DayPickerSingleDateController />` component.

## 1.1.0 - 2020-01-24

### Added

- `darkEmerald` to `SingleDatePicker` color options.

## 1.0.2 - 2019-12-04

### Fixed

- Excluded all dependencies, peerDependencies, and optionalDependencies from commonjs output.

### Changed

- `jest-dom` to `@testing-library/jest-dom`.

## 1.0.1 - 2019-11-19

### Fixed

- Updated `websocket-driver` transitive dependency since version 0.7.2 was removed from npm.

## 1.0.0 - 2019-06-13

### Changed

- `react-testing-library` to `@testing-library/react` and other dependency updates.

## 0.1.9 - 2019-04-03

### Changed

- Remove superfluous `async`/`await` usage in `singleDatePickerTestUtils`.

## 0.1.8 - 2019-04-03

### Fixed

- Always convert `date`, which should be passed in as a string, to `moment` objects internally in `singleDatePickerTestUtils`.

## 0.1.7 - 2019-04-01

### Added

- Validation example to `<SingleDatePicker />` stories.

### Fixed

- Blur handling in `<SingleDatePicker />` mobile fallback.

## 0.1.6 - 2019-03-29

### Added

- `mobileBreakpoint` prop to `<SingleDatePicker />` stories.

## 0.1.5 - 2019-03-21

### Added

- Documentation link to `README.md`.

### Changed

- Migrate to `storybook` 5.

## 0.1.4 - 2019-03-20

### Changed

- Add `stories` directory to `lint` and `prettier` scripts.

## 0.1.3 - 2019-03-10

### Changed

- Revise `singleDatePickerTestUtils` to handle empty dates.

## 0.1.2 - 2019-03-18

### Fixed

- Hover state in `<SingleDatePicker />` component.

## 0.1.1 - 2019-03-18

### Fixed

- Expose `singleDatePickerTestUtils` from build.

## 0.1.0 - 2019-03-18

### Added

- `<SingleDatePicker />` component.
