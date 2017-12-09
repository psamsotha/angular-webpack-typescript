import './todo-list.component.scss';

import { AppState } from '../../app.state';
import { TodoService } from '../todo.service';
import { TodoActions } from '../todo.actions';
import { ITodoData } from '../models';
import { CompleteChangeEvent } from './todo-item.component';
import { ShowCompleteChangeEvent } from './todo-list-filter.component';
import { getIsFetching, getShowCompleted, getTodosToJs } from '../state/selectors';


export class TodoListController implements ng.IComponentController {
  static $inject = ['TodoService', 'TodoActions', '$ngRedux'];

  private unsubscribe: any;
  private showCompleted: boolean;

  constructor(
    private todoService: TodoService,
    private todoActions: TodoActions,
    private $ngRedux: ngRedux.INgRedux,
  ) {
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);

      this.showCompletedFilter = this.showCompletedFilter.bind(this)
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

  handleCompleteChange(event: CompleteChangeEvent) {
    const { todoId, complete } = event;
    this.$ngRedux.dispatch(this.todoActions.todoComplete(todoId, complete))
  }

  handleShowCompleteChange(event: ShowCompleteChangeEvent) {
    const { showCompleted } = event;
    this.$ngRedux.dispatch(this.todoActions.showCompleted(showCompleted));
  }

  showCompletedFilter(todo) {
    return this.showCompleted || !todo.complete;   
  }

  mapStateToThis(state: AppState) {
    return {
      todos: getTodosToJs(state),
      isFetching: getIsFetching(state),
      showCompleted: getShowCompleted(state)
    };
  }
}

export const TodoListComponent: ng.IComponentOptions = {
  templateUrl: 'todos/components/todo-list.component.html',
  controller: TodoListController
};
