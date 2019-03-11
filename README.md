# Brown University Datepicker

A datepicker for React-based applications at Brown University.

_On-prem Bitbucket doesn't render markdown very nicely; view this in a markdown editor like [Dillinger](https://dillinger.io/)._

---

## Install

### Add Brown University Datepicker

```
  // npm
  npm i git+https://bitbucket.brown.edu/scm/react/brown-university-datepicker.git#semver:^0.1
  // yarn
  yarn add git+https://bitbucket.brown.edu/scm/react/brown-university-datepicker.git#^0.1
```

_Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

### Dependencies

#### Required Peer Dependencies

These libraries are not bundled with Brown University Datepicker and are required at runtime:

- [**brown-university-styles**](https://bitbucket.brown.edu/projects/REACT/repos/brown-university-styles)
- [**react**](https://www.npmjs.com/package/react)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

---

## Documentation

TODO

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
