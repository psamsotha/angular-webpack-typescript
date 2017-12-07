import * as angular from 'angular';

/**
 * Import libraries
 */
import 'angular';
import 'angular-resource';
import '@uirouter/angularjs';


/**
 * Importing the app images
 */
require.context('./assets/img', true, /^\.\//);

/**
 * Import application modules
 */
import { resourcesModule } from './resources';


/**
 * Configure the app
 */
angular
  .module('app', [
    "ui.router",

    resourcesModule.name
  ]);
