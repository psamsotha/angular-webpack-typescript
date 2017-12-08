import './app.scss';

import * as angular from 'angular';
import * as ngRedux from 'ng-redux';
import uiRouter from '@uirouter/angularjs';

/**
 * Import libraries
 */
import 'angular';
import '@uirouter/angularjs';
import 'ng-redux';


/**
 * Importing the app images
 */
require.context('./assets/img', true, /^\.\//);

/**
 * Import application modules
 */
import { appConfig } from './app.config';
import { TodosModule } from './todos';


/**
 * Configure the app
 */
angular
  .module('app', [
    uiRouter,

    'ngRedux',
    TodosModule
  ])
  .config(appConfig);
