/// <reference path="../../../globals.d.ts" />

import { SharedComponentsModule } from './index';
import { CheckboxController } from './checkbox';


describe('shared.component: Checkbox', () => {
  let $componentController: ng.IComponentControllerService;

  beforeEach(() => {
    angular.mock.module(SharedComponentsModule);
    angular.mock.inject((_$componentController_: ng.IComponentControllerService) => {
      $componentController = _$componentController_;
    });
  });

  it('should get a different id for each instance', () => {
    let ctrl1: CheckboxController = $componentController('checkbox', null, null);
    let ctrl2: CheckboxController = $componentController('checkbox', null, null);

    expect(ctrl1['id']).toBe(1);
    expect(ctrl2['id']).toBe(2);
  });

  describe('onCheckChange()', () => {
    it('should call onChange() binding with event data', () => {
      let onChange = jasmine.createSpy('onChange');
      let bindings = { onChange, checked: false };
      let ctrl: CheckboxController = $componentController('checkbox', null, bindings);

      ctrl.onCheckChange();
      expect(onChange).toHaveBeenCalledWith({
        $event: { value: false }
      });

      ctrl['checked'] = true;
      ctrl.onCheckChange();
      expect(onChange).toHaveBeenCalledWith({
        $event: { value: true }
      });
    });
  });
});