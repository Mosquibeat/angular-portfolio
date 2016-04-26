import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lightboxComponent from './lightbox.component';

let lightboxModule = angular.module('lightbox', [
  uiRouter
])

.component('lightbox', lightboxComponent);

export default lightboxModule;
