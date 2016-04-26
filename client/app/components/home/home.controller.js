class HomeController {
  constructor(text, $rootScope) {
  	"ngInject";
    this.name = 'home';
    this.text = text.getMain();
  }
}

export default HomeController;
