/// <reference path="../../../globals.d.ts" />

import { TodosModule } from '../index';
import { TodoItemController } from './todo-item.component';
import { CheckChangeEvent } from '../../shared/components';


describe('todos.components: TodoItemController', () => {
  let $componentController: ng.IComponentControllerService;
  
  beforeEach(() => {
    angular.mock.module(TodosModule);
    angular.mock.inject((_$componentController_: ng.IComponentControllerService) => {
      $componentController = _$componentController_;
    });
  });

  describe('checkChange()', () => {
    it('should call the `onCompleteChange()` binding with change info', () => {
      let onCompleteChange = jasmine.createSpy('onCompleteChange');
      let bindings = { onCompleteChange, todo: { id: 1 }};
      let ctrl: TodoItemController = $componentController('todoItem', null, bindings);
      let event: CheckChangeEvent = { value: true };

      ctrl.checkChanged(event);

      expect(onCompleteChange).toHaveBeenCalledWith({
        $event: {
          todoId: 1,
          complete: true
        }
      });
    });
  });
});