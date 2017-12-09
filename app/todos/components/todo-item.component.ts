import './todo-item.component.scss';

import { ITodo } from '../models';
import { CheckChangeEvent } from '../../shared/components/checkbox';


export interface CompleteChangeEvent {
  todoId: number,
  complete: boolean;
}

export class TodoItemController implements ng.IComponentController {

  private todo: ITodo;
  private onCompleteChange: Function;

  
  checkChanged(event: CheckChangeEvent) {
    const todoId = this.todo.id;
    const complete = event.value;

    this.onCompleteChange({
      $event:{
        todoId,
        complete
      } as CompleteChangeEvent
    })
  }
}


export const TodoItemComponent: ng.IComponentOptions = {
  bindings: {
    todo: '<',
    onCompleteChange: '&'
  },
  templateUrl: 'todos/components/todo-item.component.html',
  controller: TodoItemController
};
