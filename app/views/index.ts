import * as angular from 'angular';

import { TodoListModule } from './todo-list/todo-list.module';
import { TodoDetailModule } from './todo-detail/todo-detail.module';


export const ViewsModule: ng.IModule = angular
  .module('app.views', [
    TodoListModule.name,
    TodoDetailModule.name
  ]);
