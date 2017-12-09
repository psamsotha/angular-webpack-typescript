import { TodoActions } from '../todo.actions';
import { TodoRecord, ITodo } from '../models';
import { Map, is } from 'immutable';
import { todoReducer } from './todo.reducer';


describe('todos.state: todoReducer', () => {
  let actions: TodoActions;
  let initialTodo: any;

  beforeEach(() => {
    actions = new TodoActions();

    initialTodo = new TodoRecord({
      complete: false
    }) as ITodo;
  });

  describe('default case', () => {
    it('should return the initial state', () => {
      let todo = todoReducer(undefined, {type: 'UNDEFINED'});
      expect(is(todo, new TodoRecord())).toBe(true);
    });
  });

  describe('TODO_COMPLETE action', () => {
    it('should update the `complete` state of the todo', () => {
      let todo = todoReducer(initialTodo, actions.todoComplete(1, true));
      expect(initialTodo).not.toBe(todo);
      expect(todo.complete).toBe(true);

      todo = todoReducer(initialTodo, actions.todoComplete(1, false));
      expect(todo.complete).toBe(false);
    });
  });
});
