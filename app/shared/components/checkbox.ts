import './checkbox.scss';


export interface CheckChangeEvent {
  value: boolean;
}

let boxId = 1;

export class CheckboxController implements ng.IComponentController {

  private id: number;

  /* bindings */
  private checked: boolean;
  private onChange: Function;

  constructor() {
    this.id = boxId++;
  }

  onCheckChange() {
    this.onChange({ $event: { value: this.checked } });
  }
}

export const Checkbox: ng.IComponentOptions = {
  bindings: {
    checked: '<',
    onChange: '&'
  },
  template: function () {
    const html = `
      <input id="css-checkbox{{$ctrl.id}}"
             type="checkbox"
             class="css-checkbox"
             ng-model="$ctrl.checked"
             ng-change="$ctrl.onCheckChange()"/>
      <label class="css-label" for="css-checkbox{{$ctrl.id}}">     
    `;
    return html;
  },
  controller: CheckboxController
}
