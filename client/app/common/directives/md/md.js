import angular from 'angular';
import MdDirective from './md.directive';


let mdModule = angular.module('md', [])

.directive('md', () => new MdDirective);;

export default mdModule;
