import angular from 'angular';
import ProjectFactory from './project.factory';

let projectModule = angular.module('project', [])

.factory('project', ProjectFactory);

export default projectModule;
