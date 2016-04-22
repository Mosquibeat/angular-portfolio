import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './list.component';

let listModule = angular.module('list', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.when("/project", "/project/list");
  $urlRouterProvider.otherwise('/');
  $stateProvider
  	.state('project', {
        abstract: true,
        url: '/project',
        template: '<ui-view/>'
    })

    .state('project.list', {
        url: '/list',
      	template: '<list></list>'
    })
})

.component('list', listComponent);

export default listModule;
