import * as angular from 'angular';
import { Checkbox } from './checkbox';

export { Checkbox } from './checkbox';


export const SharedComponentsModule: string = angular
  .module('app.shared.components', [])
  .component('checkbox', Checkbox)
  .name;


