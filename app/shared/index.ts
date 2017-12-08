import * as angular from 'angular';

import { SharedComponentsModule } from './components';


export const SharedModule: string = angular
  .module('app.shared', [
    SharedComponentsModule
  ])
  .name;