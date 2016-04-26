class AppController {
  constructor($rootScope) {
  	"ngInject";
  	$rootScope.language = "FR";
    this.name = 'app';
  }
}

export default AppController;
