import './todo-list.component.scss';


class TodoListController implements ng.IComponentController {

}


export const TodoListComponent: ng.IComponentOptions = {
  templateUrl: 'views/todo-list/todo-list.component.html',
  bindings: {
    todos: '<'
  },
  controller: TodoListController
};
