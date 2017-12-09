import { AnyAction } from 'redux';
import { ITodoData } from './models';


export class TodoActions {
  static readonly FETCH_TODOS = 'FETCH_TODOS';
  static readonly FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
  static readonly FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

  static readonly TODO_COMPLETE = 'TODO_COMPLETE';
  static readonly SHOW_COMPLETED = 'SHOW_COMPLETED';
  

  fetchTodos(): AnyAction {
    return {
      type: TodoActions.FETCH_TODOS
    };
  }

  fetchTodosSuccess(todos: ITodoData[]): AnyAction {
    return {
      type: TodoActions.FETCH_TODOS_SUCCESS,
      payload: {
        todos
      }
    };
  }

  fetchTodosFailure(error: any): AnyAction {
    return {
      type: TodoActions.FETCH_TODOS_FAILURE,
      payload: {
        error
      }
    }
  }

  todoComplete(todoId: number, complete: boolean): AnyAction {
    return {
      type: TodoActions.TODO_COMPLETE,
      payload: {
        todoId,
        complete
      }
    };
  }

  showCompleted(showCompleted: boolean): AnyAction {
    return {
      type: TodoActions.SHOW_COMPLETED,
      payload: {
        showCompleted
      }
    };
  }
}
