import './todo-list.component.scss';

import { AppState } from '../../app.state';
import { TodoService } from '../todo.service';
import { TodoActions } from '../todo.actions';
import { ITodoData } from '../models';


export class TodoListController implements ng.IComponentController {
  static $inject = ['TodoService', 'TodoActions', '$ngRedux'];

  private unsubscribe: any;

  constructor(
    private todoService: TodoService,
    private todoActions: TodoActions,
    private $ngRedux: ngRedux.INgRedux,
  ) {
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
  }

  $onInit() {
    this.$ngRedux.dispatch(this.todoActions.fetchTodos());
    this.todoService.getTodos().then((todos: ITodoData[]) => {
      this.$ngRedux.dispatch(this.todoActions.fetchTodosSuccess(todos));
    });
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state: AppState) {
    const { todoList } = state;
    const isFetching = todoList.get('isFetching');
    const todoIds = todoList.get('todoIds');

    const todos = todoIds.map((todoId) => {
      return todoList.get(todoId);
    });

    return {
      todos: todos.toJS(),
      isFetching
    };
  }
}

export const TodoListComponent: ng.IComponentOptions = {
  templateUrl: 'todos/components/todo-list.component.html',
  controller: TodoListController
};
