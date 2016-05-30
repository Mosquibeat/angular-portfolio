import appComponent from '../../app.component';
import config from '../../config.js';

class HomeController {
  constructor(user) {
  	"ngInject";
    this.name = 'home';
    this.lang = appComponent.lang;
    this.config = config;
    this.presentation = false;

  	user.getUser().then(
  		result => {
  			this.user = result;
  		}
  	);

    user.getPresentation(appComponent.lang).then(
  		result => {
  			this.presentation = result;
  		}
  	);
  }
}

export default HomeController;
