import * as angular from 'angular';

import { TodoListComponent } from './todo-list.component';
import { todoListStateConfig } from './todo-list.state';


export const TodoListModule: ng.IModule = angular
  .module('app.todoList', [
    'app.resources'
  ])
  .config(todoListStateConfig)
  .component('todoList', TodoListComponent);
