import * as angular from 'angular';

/**
 * Import libraries
 */
import 'angular';
import '@uirouter/angularjs';


/**
 * Importing the app images
 */
require.context('./assets/img', true, /^\.\//);


/**
 * Configure the app
 */
angular
  .module('app', [
    "ui.router",
  ])
