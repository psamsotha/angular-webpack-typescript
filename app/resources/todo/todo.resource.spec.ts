/// <reference path="../../../globals.d.ts" />

import { ITodoResource, ITodo } from './todo.resource';
import '../index';


describe('resources: TodoResource', () => {

  let $httpBackend: ng.IHttpBackendService;
  let TodoResource: ITodoResource;

  beforeAll(() => {
    // for testing resources are equal to normal objects.
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(() => {
    angular.mock.module('app.resources');
    angular.mock.inject((
      _$httpBackend_: ng.IHttpBackendService,
      _TodoResource_: ITodoResource
    ) => {
      $httpBackend = _$httpBackend_;
      TodoResource = _TodoResource_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch todos from `/data/todos/todos.json`', () => {
    const todoData = <ITodo[]>[
      { title: 'Do something' },
      { title: 'Do something else' }
    ];

    $httpBackend.expectGET('/data/todos/todos.json')
        .respond(todoData);

    const todos = TodoResource.query();
    expect(todos).toEqual([]);

    $httpBackend.flush();
    expect(todos).toEqual(todoData);
  });

  it('should fetch a single todo from `/data/todos/:todoId.json', () => {
    const todoData = <ITodo>{ id: 1, title: 'Do Something' };

    $httpBackend.expectGET('/data/todos/1.json')
        .respond(todoData);

    const todo = TodoResource.get({ todoId: 1 });
    // expect(todo).toBeUndefined();

    $httpBackend.flush();
    expect(todo).toEqual(todoData);
  });
});
