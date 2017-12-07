import * as angular from 'angular';

import { TodoDetailComponent } from './todo-detail.component';
import { todoDetailStateConfig } from './todo-detail.state';


export const TodoDetailModule: ng.IModule = angular
  .module('app.todoDetail', [
    'app.resources'
  ])
  .config(todoDetailStateConfig)
  .component('todoDetail', TodoDetailComponent);
