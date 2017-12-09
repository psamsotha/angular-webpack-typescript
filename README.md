Angular 1.6 - Typescript - Webpack starter pack
===============================================

This repository contains a basic app running using Angular 1.6.6, Typescript 2.5.2 and Webpack 3.6.0

## Usage

* Run `npm start` to install npm dependencies and start a local dev server
* Run `npm build` to build a production distrib of your app
* Run `npm run dev` to start a local dev server
* Run `npm run dist` to build a production distrib of your app and serve it with a local server
* Run `npm test` to run the karma unit tests with watch
* Run `test-single-run` to run the karma unit tests once
* Run `npm run update-webdriver` to update webwriver
* Run `npm run protractor` to run protractor
* Run `npm run tsc:e2e` to build e2e tests

Before running e2e tests, you should update webdriver with `npm run update-webdriver`. You will also
need to have the application running; run `npm start` in a different terminal, then you can run
`npm run protractor`.

## Misc

This also uses [angular-material](https://github.com/angular/material) 1.1.5 and [angular-ui-router](https://github.com/angular-ui/ui-router) 1.0.6

## Next steps

* Add Lazy loading
* Hot reloading of CSS
* Add E2E tests