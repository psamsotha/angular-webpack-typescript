import * as angular from 'angular';

import { SharedComponentsModule } from './components';
import { SharedFiltersModule } from './filters';


export const SharedModule: string = angular
  .module('app.shared', [
    SharedComponentsModule,
    SharedFiltersModule
  ])
  .name;