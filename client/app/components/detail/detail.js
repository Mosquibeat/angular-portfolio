import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailComponent from './detail.component';

let detailModule = angular.module('detail', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('detail', {
    	parent: 'project',
      url: '/:projectUrl',
      template: '<detail></detail>'
    });
})

.component('detail', detailComponent);

export default detailModule;
