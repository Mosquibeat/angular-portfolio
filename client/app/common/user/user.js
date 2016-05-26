import angular from 'angular';
import UserService from './user.service';

let userModule = angular.module('user', [])

.service('user', UserService);

export default userModule;
