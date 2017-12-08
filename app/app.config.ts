import * as ngRedux from 'ng-redux';
import { combineReducers } from 'redux';

import { todoListReducer } from './todos/state';


export const appConfig = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ngReduxProvider',
  (
    $locationProvider: ng.ILocationProvider,
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $ngReduxProvider: ngRedux.INgReduxProvider
  ) => {

    $locationProvider.html5Mode(true);

    /**
     * Configure ui-router states
     */
    // $urlRouterProvider.otherwise('/todos');

    // viewStates.forEach((state: ng.ui.IState) => {
    //   $stateProvider.state(state);
    // });

    /**
     * Configure ng-redux
     */
    let reducer = null;
    try {
      reducer = combineReducers({
        todoList: todoListReducer
      })
    } catch (error) {
      console.error('erro creating combine reducer')
      console.error(error);
    }
    
    try {
      $ngReduxProvider.createStoreWith(reducer);
    } catch (error) {
      console.error('error creating redux provider')
      console.error(error)
    }
    
  }
];
