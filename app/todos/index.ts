import * as angular from 'angular';
import { TodoListComponent } from './components';
import { TodoItemComponent } from './components';
import { TodoListFilterComponent } from './components';
import { TodoService } from './todo.service';
import { TodoActions } from './todo.actions';

import { TodoListState, todoListReducer } from './state/todos.reducer';

import { SharedModule } from '../shared';


export { TodoActions, TodoService };
export { TodoListState, todoListReducer } from './state';
export { TodosUiState, todosUiReducer } from './state'


export const TodosModule: string = angular
  .module('todos', [
    SharedModule
  ])
  .component('todoList', TodoListComponent)
  .component('todoItem', TodoItemComponent)
  .component('todoListFilter', TodoListFilterComponent)
  .service('TodoService', TodoService)
  .service('TodoActions', TodoActions)
  .name;
