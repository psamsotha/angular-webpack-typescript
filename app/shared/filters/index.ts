import * as angular from 'angular';

import { ellipsesFilter } from './ellipses';


export const SharedFiltersModule: string = angular
  .module('app.shared.filters', [])
  .filter('ellipses', ellipsesFilter)
  .name;
