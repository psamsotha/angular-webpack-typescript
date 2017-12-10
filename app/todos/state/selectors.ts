import { createSelector } from 'reselect';
import { AppState } from '../../app.state';


const getTodosState = (state: AppState) => state.todoList;

const getTodosUiState = (state: AppState) => state.uiTodos;


export const getTodosToJs = createSelector(
  [getTodosState],
  (todoList) => {
    const todoIds = todoList.get('todoIds');
    const todos = todoIds.map((todoId) => {
      return todoList.get(todoId);
    });

    return (todos && todos.toJS()) || [];
  }
);

export const getIsFetching = createSelector(
  [getTodosState],
  (todoList) => {
    return todoList.get('isFetching');
  }
);

export const getShowCompleted = createSelector(
  [getTodosUiState],
  (todosUi) => {
    return todosUi.get('showCompleted');
  }
);
