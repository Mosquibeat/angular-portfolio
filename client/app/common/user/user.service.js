import config from '../../config';

export default class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUser() {
    return this.$http
      .get(config.apiUrl + '/users/' + config.userId)
      .then((response) => {
        return response.data.user;
    });
  }

  getPresentation(lang) {
    return this.$http
      .get(config.assetsUrl + '/' + lang + '.md')
      .then((response) => {
        return response.data;
    });
  }
}


UserService.$inject = ['$http'];
