import { TodoActions } from '../todo.actions';
import { ITodoData, TodoRecord } from '../models';
import { Map, List, is } from 'immutable';
import { todoListReducer, initialState } from './todos.reducer';


describe('todo.state todoListReducer', () => {
  let actions: TodoActions;
  let initialTodos: Map<any, any>;

  beforeEach(() => {
    actions = new TodoActions();

    initialTodos = Map({
      isFetching: false,
      todoIds: List()
    });
  });

  describe('default case', () => {
    it('should return the initial state', () => {
      let todoList = todoListReducer(undefined, {type: 'UNDEFINED'});
      expect(todoList instanceof Map).toBe(true);
      expect(todoList.get('isFetching')).toBe(false);
      expect(is(todoList.get('todoIds'), List())).toBe(true);
    });
  });

  describe('FETCH_TODOS', () => {
    it('should update the `isFetching` state of the list', () => {
      let todoList = todoListReducer(initialTodos, actions.fetchTodos());
      expect(initialTodos).not.toBe(todoList);
      expect(todoList.get('isFetching')).toBe(true);
    });
  });

  describe('FETCH_TODOS_SUCCESS', () => {
    let todosData: ITodoData[];

    beforeEach(() => {
      todosData = [
        { id: 1, title: 'todo 1' },
        { id: 2, title: 'todo 2'}
      ] as ITodoData[];
    })

    it('should update the todoIds state of the list', () => {
      let todoList = todoListReducer(initialTodos, actions.fetchTodosSuccess(todosData));
      expect(is(todoList.get('todoIds'), List([1, 2]))).toBe(true);
    });

    it('should add the the new todos to the list', () => {
      let todoList = todoListReducer(initialTodos, actions.fetchTodosSuccess(todosData));

      expect(todoList.get(<any>1).title).toBe('todo 1');
      expect(todoList.get(<any>2).title).toBe('todo 2');
    });
  });

  describe('FETCH_TODOS_FAILURE', () => {
    it('should update the `isFetching state to false', () => {
      initialTodos = initialTodos.set('isFetching', true);
      let todoList = todoListReducer(initialTodos, actions.fetchTodosFailure('error'));
      expect(todoList.get('isFetching')).toBe(false);
    });
  });

  describe('TODO_COMPLETE', () => {
    it('should set the complete state of the todo', () => {
      initialTodos = initialTodos.set(<any>1, new TodoRecord({
        id: 1, complete: false
      }));

      let todoList = todoListReducer(initialTodos, actions.todoComplete(1, true));
      expect(todoList.get(<any>1).complete).toBe(true);
    });
  });
});
