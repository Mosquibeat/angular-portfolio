import angular from 'angular';
import Navbar from './navbar/navbar';
import Project from './project/project';
import Text from './text/text';
import Lightbox from './lightbox/lightbox';
import Directives from './directives/directives';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Project.name,
  Lightbox.name,
  Text.name,
  Directives.name
]);

export default commonModule;
