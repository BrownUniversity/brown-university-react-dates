# Brown University React Dates

A wrapped implementation of Airbnb's [`react-dates`](https://github.com/airbnb/react-dates) plus some test utils for use in React-based applications at Brown University.

---

## Usage

### 1. Install packages

#### Brown University React Dates

```sh
// npm
npm i BrownUniversity/brown-university-react-dates#semver:^1.2

// yarn
yarn add BrownUniversity/brown-university-react-dates#^1.2
```

#### Required Peer Dependencies

These libraries are not bundled with Brown University React Dates and are required at runtime:

- [**brown-university-styles**](https://github.com/BrownUniversity/brown-university-styles)
- [**moment**](https://www.npmjs.com/package/moment)
- [**react**](https://www.npmjs.com/package/react)
- [**react-dates**](https://www.npmjs.com/package/react-dates)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

### Optipnal Peer Dependencies

These libraries are not bundled with Brown University React Dates, but are required to use the test utils:

- [**@testing-library/jest-dom**](https://www.npmjs.com/package/@testing-library/jest-dom)
- [**@testing-library/react**](https://www.npmjs.com/package/@testing-library/react)

### 2. Import styles from Brown University Styles

### 3. Configure React Dates

---

## Documentation

The documentation is available at https://brownuniversity.github.io/brown-university-react-dates/.

---

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080](http://localhost:8080/) with [storybook](https://storybook.js.org/):

```sh
npm start
```

Run tests:

```sh
npm test
```

Run tests with code coverage:

```sh
npm test:coverage
```

Run tests with code coverage and open report:

```sh
npm test:coverage:open
```

Watch tests:

```sh
npm run test:watch
```

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push master and tags to all remotes
