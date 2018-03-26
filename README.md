# Meteor + React + AdminLTE
[![bitHound Code](https://www.bithound.io/github/jeescu/meteor-react-admin-lte/badges/code.svg)](https://www.bithound.io/github/jeescu/meteor-react-admin-lte)
[![bitHound Dependencies](https://www.bithound.io/github/jeescu/meteor-react-admin-lte/badges/dependencies.svg)](https://www.bithound.io/github/jeescu/meteor-react-admin-lte/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/jeescu/meteor-react-admin-lte/badges/devDependencies.svg)](https://www.bithound.io/github/jeescu/meteor-react-admin-lte/master/dependencies/npm)

Meteor project boilerplate in [ES6](https://es6.io/) and [React](https://facebook.github.io/react/) using [AdminLTE 2.4.3](http://almsaeedstudio.com/themes/AdminLTE/documentation/index.html) styles.

![Boilerplate screenshot](https://raw.githubusercontent.com/jeescu/meteor-react-admin-lte/master/public/img/Screenshot%20from%202016-06-24%2009%3A52%3A37.png)

### Prerequisites
* Node v6.9 or higher
* Npm v3 or higher
* Meteor v1.6.1

### Meteor packages
* accounts-password
* accounts-base
* alanning:roles
* react-meteor-data
* dispatch:mocha

### Basic features
* Authentication
* Routing (Uses [React Router](https://github.com/ReactTraining/react-router) as standard for React)

### Installation
```
> git clone https://github.com/jeescu/meteor-react-admin-lte.git <yourapp>
> cd <yourapp> && rm -rf .git
> npm install
```

### Running Tests
Using [Mocha](https://mochajs.org/) as test driver package and [PhantomJS](http://phantomjs.org/) for browser driver.
Also included test utilities, [Enzyme](https://github.com/airbnb/enzyme) and [Chai](http://chaijs.com/api/). See test examples in `test/` folder.

```
> npm test
```

### Linting
Uses [Airbnb style guide](https://github.com/airbnb/javascript). Just modify your rules in `.eslintrc`.
Lint will also run automatically on precommit, making sure your code is still ES6 standard! You can modify the precommit command list on `package.json` if you want to add more cool stuffs.

```
> npm run lint
```

### Own the project and start coding!
```
> npm start
```
