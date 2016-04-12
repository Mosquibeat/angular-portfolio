import angular from 'angular';
import UserFactory from './project.factory';

let projectModule = angular.module('project', [])

.factory('project', UserFactory);

export default projectModule;
