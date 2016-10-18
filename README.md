# Hydra

D3.js / SVG data vis for home page of [coolgarif.com](http://www.coolgarif.com/) showing the areas in which we operate.

## Viewing the visualisation

 * open the __*.html__ files in the __/dev__ folder in your _modern_ browser

## Dependencies

### [Karma](http://karma-runner.github.io/0.8/index.html) - Javascript Test Runner (formerly Testacular)

 * Requires [NodeJS](http://nodejs.org/) & [NPM](https://npmjs.org/)
 * To [install](http://karma-runner.github.io/0.8/intro/installation.html) globally, run:

```
$ npm install -g karma
```

## Running Tests

The tests are written in [Jasmine](https://jasmine.github.io/) and are run in the versions of Chrome and Firefox that exist on your system.

To run the test suite:

```
$ cd /path/to/cloned/repo
$ ./scripts/test.sh
```

 * the script will launch Chrome and Firefox windows - minimise these, but, leave them open
 * the terminal window will show the results of the tests run every time you save changes to either the unit test files, or, the js files being tested in __dev/js/__
 * kill the test runner with __Ctrl+C__ - this will also kill the browser windows


 * edit the test configuration in __config/testacular.conf.js__ 
 * unit tests found in __tests/__
