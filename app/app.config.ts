import { INgReduxProvider } from 'ng-redux';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

import { combineReducers } from 'redux';

import { todoListReducer, todosUiReducer } from './todos';


export const appConfig = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ngReduxProvider',
  (
    $locationProvider: ng.ILocationProvider,
    $stateProvider: IStateProvider,
    $urlRouterProvider: IUrlRouterProvider,
    $ngReduxProvider: INgReduxProvider
  ) => {

    $locationProvider.html5Mode(true);

    $ngReduxProvider.createStoreWith(combineReducers({
      todoList: todoListReducer,
      uiTodos: todosUiReducer,
    }));
  }
];
