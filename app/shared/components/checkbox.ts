import './checkbox.scss';


export interface CheckChangeEvent {
  value: boolean;
}

let boxId = 1;

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
  controller: function () {
    this.id = boxId++;

    this.onCheckChange = function () {
      this.onChange({ $event: { value: this.checked } });
    }
  }
}
