/// <reference path="../../globals.d.ts" />

import { INgReduxProvider } from 'ng-redux';
import { combineReducers } from 'redux';


export const createTestModule = (dependencies: string[], reducers: any) => {
  return angular
    .module('testModule', dependencies)
    .config(($ngReduxProvider: INgReduxProvider) => {
      $ngReduxProvider.createStoreWith(reducers);
    })
    .name;
}
