import { TodoActions } from '../todo.actions';
import { todosUiReducer } from './todos.ui.reducer';
import { Map } from 'immutable';


describe('todos.state: todosUiReducer', () => {
  let actions: TodoActions;
  let initialState: Map<string, any>;

  beforeEach(() => {
    actions = new TodoActions();

    initialState = Map({
      showCompleted: true
    });
  });

  describe('default case', () => {
    it('should return the initial state', () => {
      let todosUi = todosUiReducer(undefined, {type: 'UNDEFINED'});
      expect(todosUi instanceof Map).toBe(true);
      expect(todosUi.get('showCompleted')).toBe(true);
    });
  });

  describe('SHOW_COMPLETED action', () => {
    it('should update the showCompleted state', () => {
      let todosUi = todosUiReducer(initialState, actions.showCompleted(false));
      expect(todosUi.get('showCompleted')).toBe(false);
    });
  });
});
