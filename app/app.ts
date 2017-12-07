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
import { appConfig } from './app.config';
import { ResourcesModule } from './resources';
import { ViewsModule } from './views';


/**
 * Configure the app
 */
angular
  .module('app', [
    "ui.router",

    ResourcesModule.name,
    ViewsModule.name
  ])
  .config(appConfig);
