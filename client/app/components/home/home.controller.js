import appComponent from '../../app.component';
class HomeController {
  constructor(text, user) {
  	"ngInject";
    this.name = 'home';
    this.text = text.getMain();
    this.lang = appComponent.lang;
    
  	user.getUser().then(
  		result => {
  			this.user = result;
  		}
  	);
  }
}

export default HomeController;
