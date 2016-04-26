import angular from 'angular';
import Md from './md/md';

let directivesModule = angular.module('app.directives', [
  Md.name
]);

export default directivesModule;
