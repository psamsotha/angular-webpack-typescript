import { browser, element, by } from 'protractor';


export class TodosPage {
  todoList = element.all(by.repeater('todo in $ctrl.todos'));
  showCompletedCheck = element(by.css('.todos-filter input[type="checkbox"]'));

  get() {
    browser.get('index.html');
  }

  isShowCompletedChecked() {
    return this.showCompletedCheck.isSelected();
  }

  tickShowCompleted() {
    this.showCompletedCheck.click();
  }
}
