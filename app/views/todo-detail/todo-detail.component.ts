import { ITodo } from '../../resources';


class TodoDetailController implements ng.IComponentController {

}

export const TodoDetailComponent: ng.IComponentOptions = {
  templateUrl: 'views/todo-detail/todo-detail.component.html',
  bindings: {
    todo: '<'
  },
  controller: TodoDetailController
};

