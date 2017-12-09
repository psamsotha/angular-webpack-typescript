import { TodoListState } from './todos';
import { TodosUiState } from './todos';


export interface AppState {
  todoList: TodoListState,

  uiTodos: TodosUiState
}
