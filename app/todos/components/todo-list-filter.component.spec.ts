/// <reference path="../../../globals.d.ts" />

import { TodosModule } from '../index';
import { TodoListFilterController } from './todo-list-filter.component';


describe('todos.components: TodoListFilterController', () => {
  let $componentController: ng.IComponentControllerService;

  beforeEach(() => {
    angular.mock.module(TodosModule);
    angular.mock.inject((_$componentController_: ng.IComponentControllerService) => {
      $componentController = _$componentController_;
    });
  });

  describe('onCompletedCheckChange()', () => {
    it('should call the onShowCompleteChange() with event data', () => {
      let onShowCompleteChange = jasmine.createSpy('onShowCompleteChange');
      let bindings = { onShowCompleteChange, showCompleted: true };
      let ctrl: TodoListFilterController = $componentController('todoListFilter', null, bindings);

      ctrl.onCompletedCheckChange();
      expect(onShowCompleteChange).toHaveBeenCalledWith({
        $event: { showCompleted: true }
      });

      ctrl['showCompleted'] = false;
      ctrl.onCompletedCheckChange();
      expect(onShowCompleteChange).toHaveBeenCalledWith({
        $event: { showCompleted: false }
      });
    });
  });
});
