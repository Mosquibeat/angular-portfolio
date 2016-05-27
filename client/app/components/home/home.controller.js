import appComponent from '../../app.component';
class HomeController {
  constructor(text, user) {
  	"ngInject";
    this.name = 'home';
    this.lang = appComponent.lang;
    this.presentation = false;

  	user.getUser().then(
  		result => {
  			this.user = result;
  			this.presentation = String(result.language[1].description);
  		}
  	);
  }
}

export default HomeController;
