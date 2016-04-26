import angular from 'angular';
import TextFactory from './text.factory';

let textModule = angular.module('text', [])

.factory('text', TextFactory);

export default textModule;
