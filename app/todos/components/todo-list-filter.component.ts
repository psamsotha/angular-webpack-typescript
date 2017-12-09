import './todo-list-filter.component.scss';


export interface ShowCompleteChangeEvent {
  showCompleted: boolean;
}


class TodoListFilterController implements ng.IComponentController {

  private showCompleted: boolean;
  private onShowCompleteChange: Function;


  onCompletedCheckChange() {
    const showCompleted = this.showCompleted;
    this.onShowCompleteChange({ $event: { showCompleted }});
  }
}


export const TodoListFilterComponent: ng.IComponentOptions = {
  bindings: {
    showCompleted: '<',
    onShowCompleteChange: '&'
  },
  templateUrl: 'todos/components/todo-list-filter.component.html',
  controller: TodoListFilterController
};
