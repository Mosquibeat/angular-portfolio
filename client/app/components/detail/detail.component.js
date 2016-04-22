import template from './detail.html';
import controller from './detail.controller';
require('./detail.scss');

let detailComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default detailComponent;
