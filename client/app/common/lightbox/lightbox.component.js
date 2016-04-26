import template from './lightbox.html';
import controller from './lightbox.controller';
import './lightbox.scss';

let lightboxComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default lightboxComponent;
