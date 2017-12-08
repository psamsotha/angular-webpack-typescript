import { ITodo } from '../models';
import { TodoActions } from '../todo.actions';
import { INgRedux } from 'ng-redux';
import { CheckChangeEvent } from '../../shared/components/checkbox';


class TodoItemController implements ng.IComponentController {
  static $inject = ['TodoActions', '$ngRedux'];

  private todo: ITodo;

  constructor(
    private todoActions: TodoActions,
    private $ngRedux: INgRedux
  ) {}
  
  checkChanged(event: CheckChangeEvent) {
    const todoId = this.todo.id;
    const complete = event.value;
    console.log(`complete(${this.todo.id}): ${complete}`)
    this.$ngRedux.dispatch(this.todoActions.todoComplete(todoId, complete))
  }
}


export const TodoItemComponent: ng.IComponentOptions = {
  bindings: {
    todo: '<'
  },
  templateUrl: 'todos/components/todo-item.component.html',
  controller: TodoItemController
}
