import { ITodoResource } from '../../resources';
import { stateConfigFactory } from '../util';


const todoListState: ng.ui.IState = {
  name: 'todo-list',
  url: '/todo-list',
  component: 'todoList',
  resolve: {
    todos: [
      'TodoResource',
      (TodoResource: ITodoResource) => {
        return TodoResource.query();
      }
    ]
  }
};

export const todoListStateConfig = stateConfigFactory(todoListState);
