import angular from 'angular';
import Navbar from './navbar/navbar';
import Project from './project/project';
import Text from './text/text';
import Directives from './directives/directives';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Project.name,
  Text.name,
  Directives.name,
  User.name
]);

export default commonModule;
