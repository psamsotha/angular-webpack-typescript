import { TodoRecord } from '../models';
import { ITodo } from '../models';
import { TodoActions } from '../todo.actions';
import { AnyAction } from 'redux';



export const initialState: ITodo = new TodoRecord() as ITodo;

export function todoReducer(state: ITodo = initialState, action: AnyAction): ITodo {
  switch (action.type) {
    case TodoActions.TODO_COMPLETE:
      return state.merge({
        complete: action.payload.complete
      }) as ITodo;

    default:
      return state;
  }
}
