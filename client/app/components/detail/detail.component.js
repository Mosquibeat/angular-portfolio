import template from './detail.html';
import controller from './detail.controller';
import '../../../../node_modules/swipebox/src/css/swipebox.css';
import './detail.scss';

let detailComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default detailComponent;
