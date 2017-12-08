import * as angular from 'angular';
import { TodoListComponent } from './components';
import { TodoService } from './todo.service';
import { TodoActions } from './todo.actions';

import { todoListReducer } from './state/todos.reducer';


export { TodoActions, TodoService, todoListReducer };


export const TodosModule: string = angular
  .module('todos', [
    
  ])
  .component('todoList', TodoListComponent)
  .service('TodoService', TodoService)
  .service('TodoActions', TodoActions)
  .name;
