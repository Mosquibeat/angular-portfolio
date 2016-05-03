import angular from 'angular';
import Navbar from './navbar/navbar';
import Project from './project/project';
import Text from './text/text';
import Directives from './directives/directives';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Project.name,
  Text.name,
  Directives.name
]);

export default commonModule;
