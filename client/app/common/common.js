import angular from 'angular';
import Navbar from './navbar/navbar';
import Project from './project/project';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Project.name
]);

export default commonModule;
