import { TodoActions } from './todo.actions';


describe('todos: TodoActions', () => {
  let actions: TodoActions;

  beforeEach(() => {
    actions = new TodoActions();
  });

  describe('fetchTodos()', () => {
    it('should return action', () => {
      expect(actions.fetchTodos()).toEqual({
        type: TodoActions.FETCH_TODOS
      });
    });
  });

  describe('fetchTodosSuccess()', () => {
    it('should return action', () => {
      let todos = [{id: 1, title: 'todo'}];
      expect(actions.fetchTodosSuccess(<any>todos)).toEqual({
        type: TodoActions.FETCH_TODOS_SUCCESS,
        payload: { todos }
      });
    });
  });

  describe('fetchTodosFailure()', () => {
    it('should return action', () => {
      expect(actions.fetchTodosFailure('error')).toEqual({
        type: TodoActions.FETCH_TODOS_FAILURE,
        payload: { error: 'error' }
      });
    });
  });

  describe('todoComplete()', () => {
    it('should return action', () => {
      let todoId = 1;
      let complete = true;
      expect(actions.todoComplete(todoId, complete)).toEqual({
        type: TodoActions.TODO_COMPLETE,
        payload: { todoId, complete}
      });
    });
  });

  describe('showComplete()', () => {
    it('should return action', () => {
      let showCompleted = false;
      expect(actions.showCompleted(showCompleted)).toEqual({
        type: TodoActions.SHOW_COMPLETED,
        payload: { showCompleted }
      });
    });
  });
});
