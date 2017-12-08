import * as angular from 'angular';
import { TodoListComponent } from './components';
import { TodoItemComponent } from './components';
import { TodoService } from './todo.service';
import { TodoActions } from './todo.actions';

import { todoListReducer } from './state/todos.reducer';

import { SharedModule } from '../shared';


export { TodoActions, TodoService, todoListReducer };


export const TodosModule: string = angular
  .module('todos', [
    SharedModule
  ])
  .component('todoList', TodoListComponent)
  .component('todoItem', TodoItemComponent)
  .service('TodoService', TodoService)
  .service('TodoActions', TodoActions)
  .name;
