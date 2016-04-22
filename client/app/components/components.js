import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import List from './list/list';
import Detail from './detail/detail';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  List.name,
  Detail.name,
]);

export default componentModule;
