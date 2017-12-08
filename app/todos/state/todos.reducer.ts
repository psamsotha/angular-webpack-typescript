import { AnyAction } from 'redux';
import { Map, List } from 'immutable';
import { TodoActions } from '../todo.actions';
import { todoReducer } from './todo.reducer';
import { createTodo, ITodoData } from '../models';


export type TodoListState = Map<string, any>;

export const initialState: TodoListState = Map<string, any>({
  isFetching: false,
  todoIds: List<number>()
});

export function todoListReducer(state: TodoListState = initialState,
                                action: AnyAction): TodoListState {
  switch (action.type) {

    /**
     * When fetching, set is loading
     * for loading indicators
     */
    case TodoActions.FETCH_TODOS:
      return state.set('isFetching', true);

    /**
     * When fetching succeeds, add todos
     * to map with id as key, and also
     * load id to id list. Id list will
     * be used to retrieve the todos from
     * the map.
     */
    case TodoActions.FETCH_TODOS_SUCCESS:
      return state.withMutations(todos => {

        const todosData = action.payload.todos;
        const todoIds = todos.get('todoIds');

        todosData.forEach((todo) => {
          todos.set(todo.id, createTodo(todo));
        });

        todos.set('isFetching', false);
        todos.set('todoIds', mergeTodoIds(todoIds, todosData));    
      });

    /**
     * Right now we don't do anything on
     * failure except change the isFetching
     * state. We might want to do something
     * with the error.
     */
    case TodoActions.FETCH_TODOS_FAILURE:
      const { error } = action.payload
      return state.set('isFetching', false);

    case TodoActions.TODO_COMPLETE:
      const todoId = action.payload.todoId;
      const todo = state.get(todoId);
      return state.set(todoId, todoReducer(todo, action));
      
    default:
      return state;
  }
}

function mergeTodoIds(todoIds: List<number>, todos: ITodoData[]) {
  const ids = todoIds.toJS();
  const newIds = todos.reduce((list: number[], todo: ITodoData) => {
    if (ids.indexOf(todo.id) === -1) {
      list.push(todo.id);
    }
    return list;
  }, []);

  return newIds.length ? List<number>(todoIds.concat(newIds)) : todoIds;
}