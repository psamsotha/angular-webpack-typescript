import { ITodoResource } from '../../resources';
import { stateConfigFactory } from '../util';


const todoDetailState: ng.ui.IState = {
  name: 'todo',
  url: '/todos/{todoId}',
  component: 'todoDetail',
  resolve: {
    todo: [
      'TodoResource',
      '$stateParams',
      (TodoResource: ITodoResource, $stateParams: ng.ui.IStateParamsService) => {
        return TodoResource.get({ todoId: $stateParams.todoId });
      }
    ]
  }
}


export const todoDetailStateConfig = stateConfigFactory(todoDetailState);