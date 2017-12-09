/// <reference path="../../globals.d.ts" />

import { TodosModule } from './index';
import { TodoService } from './todo.service';
import { INgRedux, INgReduxProvider } from 'ng-redux';
import { todoListReducer } from './state/todos.reducer';

import { createTestModule } from '../test';


describe('todos: TodoService', () => {
  let service: TodoService;
  let $httpBackend: ng.IHttpBackendService;

  beforeEach(() => {
    let testModule = createTestModule([TodosModule], {
      todoList: todoListReducer
    });
    angular.mock.module(testModule);
    angular.mock.inject((
      TodoService: TodoService,
      _$httpBackend_: ng.IHttpBackendService,
      _$ngRedux_: INgRedux,
      _$rootScope_
    ) => {
      service = TodoService;
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return todo data', (done) => {
    let todosData = [{id: 1, title: 'todo'}];

    $httpBackend.expectGET('/data/todos.json')
        .respond(todosData);

    service.getTodos().then(data => {
      expect(data).toEqual(<any>todosData);
      done();
    });

    $httpBackend.flush();
  });
});
