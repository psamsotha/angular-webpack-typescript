import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

import { TodosPage } from './todos.page';


describe('todos page', () => {

  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
    page.get();
  });

  describe('when user ticks the "show completed" checkbox', () => {
    it('should remove completed todos from the list if the box is selected', () => {

      expect(page.isShowCompletedChecked()).toBe(true);
      expect(page.todoList.count()).toBe(4);

      page.showCompletedCheck.click();
      expect(page.isShowCompletedChecked()).toBe(false);
      expect(page.todoList.count()).toBe(3);
    });
  });
});
