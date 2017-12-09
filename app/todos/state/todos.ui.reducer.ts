import { Map, Record } from 'immutable';
import { AnyAction } from 'redux';
import { TodoActions } from '../todo.actions';


export type TodosUiState = Map<string, any>;


export const initialState: TodosUiState = Map<string, any>({
  showCompleted: true
});

export function todosUiReducer(state: TodosUiState = initialState, action: AnyAction) {
  switch(action.type) {
    case TodoActions.SHOW_COMPLETED:
      return state.set('showCompleted', action.payload.showCompleted);

    default:
      return state;
  }
}
