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
}


UserService.$inject = ['$http'];