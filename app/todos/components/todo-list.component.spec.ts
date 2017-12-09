/// <reference path="../../../globals.d.ts" />

import { TodosModule } from '../index';
import { TodoListController, TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';
import { TodoActions } from '../todo.actions';
import { CompleteChangeEvent } from './todo-item.component';
import { ShowCompleteChangeEvent } from './todo-list-filter.component';
import { INgRedux } from 'ng-redux';


describe('todos.components: TodoListController', () => {
  let $componentController: ng.IComponentControllerService;
  let $rootScope: ng.IRootScopeService;
  let $q: ng.IQService;
  let todoService: TodoService;
  let $ngRedux: any;
  let actions: TodoActions;
  let ctrl: TodoListController;

  beforeEach(() => {
    angular.mock.module(TodosModule);
    angular.mock.inject((
      _$componentController_: ng.IComponentControllerService,
      _$rootScope_: ng.IRootScopeService,
      _$q_: ng.IQService
    ) => {

      $componentController = _$componentController_;
      $rootScope = _$rootScope_;
      $q = _$q_;
    });

    actions = new TodoActions();
    todoService = <any>{
      getTodos: () => $q.resolve([{ id: 1, title: 'todo' }])
    };
    $ngRedux = <any>{
      dispatch: jasmine.createSpy('dispatch'),
      connect: () => () => jasmine.createSpy('unsubscribe')
    };

    ctrl = new TodoListController(todoService, actions, $ngRedux);
  });

  describe('$inInit()', () => {
    it('should dispatch FETCH_TODOS action', () => {
       ctrl.$onInit();
       expect($ngRedux.dispatch.calls.allArgs()[0])
          .toEqual([actions.fetchTodos()]);
    });

    it('should dispatch FETCH_TODOS_SUCCESS action when service returns data', () => {
      ctrl.$onInit();
      $rootScope.$digest();
      expect($ngRedux.dispatch.calls.allArgs()[1])
          .toEqual(
            [actions.fetchTodosSuccess(<any>[{ id: 1, title: 'todo' }])]
          );
    });
  });

  describe('$onDestroy()', () => {
    it('should unsubscribe to $ngRedux', () => {
      ctrl.$onDestroy();
      expect(ctrl['unsubscribe']).toHaveBeenCalled();
    });
  });

  describe('handleCompleteChange()', () => {
    it('should dispatch TODO_COMPLETE action', () => {
      let event: CompleteChangeEvent = { todoId: 1, complete: true };
      ctrl.handleCompleteChange(event);

      expect($ngRedux.dispatch).toHaveBeenCalledWith(actions.todoComplete(1, true));
    });
  });

  describe('handleShowCompleteChange()', () => {
    it('should dispatch SHOW_COMPLETED action', () => {
      let event: ShowCompleteChangeEvent = { showCompleted: false };
      ctrl.handleShowCompleteChange(event);

      expect($ngRedux.dispatch).toHaveBeenCalledWith(actions.showCompleted(false));
    });
  });

  describe('showCompletedFilter()', () => {
    it('should return true for todo if `showCompleted` is true', () => {
      ctrl['showCompleted'] = true;
      expect(ctrl.showCompletedFilter({ complete: true })).toBe(true);
    });

    it('should return true if `todo.complete` false', () => {
      ctrl['showCompleted'] = false;
      expect(ctrl.showCompletedFilter({ complete: false })).toBe(true);
    });

    it('should return false when both `showCompleted` is false and `todo.complete` is true', () => {
      ctrl['showCompleted'] = false;
      expect(ctrl.showCompletedFilter({ complete: true })).toBe(false);
    });
  });
});
