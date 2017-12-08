/// <reference path="../../../globals.d.ts" />

import { SharedFiltersModule } from './index';


describe('shared.filters: ellipses', () => {

  let ellipsesFilter;

  beforeEach(() => {
    angular.mock.module(SharedFiltersModule);
    angular.mock.inject(($filter) => {
      ellipsesFilter = $filter('ellipses');
    });
  });

  it('should add ellipses when text is longer than the max length', () => {
    const max = 10;
    expect(ellipsesFilter('123456789101112', max)).toEqual('1234567891...');
  });

  it('should return input when input not a string', () => {
    expect(ellipsesFilter(<any>10)).toEqual(10);
  });

  it('should return input test when text length is less than max', () => {
    const max = 10;
    expect(ellipsesFilter('12345', max)).toEqual('12345');
  });
});
