import * as angular from 'angular';

import { todoResourceFactory, ITodo, ITodoResource } from './todo/todo.resource';

/**
 * Export do clients can import from /resources instead of /resources/todo/todo.resource
 */
export { ITodo, ITodoResource };


const wrapDependency = (resourceFactory) => [
  '$resource',
  resourceFactory
];


export const ResourcesModule: ng.IModule = angular
  .module('app.resources', [
    'ngResource'
  ])
  .factory('TodoResource', wrapDependency(todoResourceFactory));
