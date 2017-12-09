import { ITodoData } from './models';
import { TodoActions } from './todo.actions';


export class TodoService {
  static $inject = ['$http', '$ngRedux'];

  constructor(
    private $http: ng.IHttpService
  ) { }

  /**
   * Get list of todos.
   */
  getTodos(): ng.IPromise<ITodoData[]> {
    return this.$http.get('/data/todos.json')
      .then((res: ng.IHttpResponse<ITodoData[]>) => {
        return res.data;
      });
  }
}

