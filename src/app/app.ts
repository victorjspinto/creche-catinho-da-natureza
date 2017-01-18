import * as angular from 'angular';
import 'angular-route';
import 'angular-material';

import 'angular-material/angular-material.css';
import './app.css';

import appModule from './app.component';
import loginModule from './login/login.component';
import firebaseAdapter from './angularfire-adapter/firebase.service';
import studentModule from './student/student'

export default angular
  .module('app', ['ngMaterial', 'ngRoute', appModule, firebaseAdapter, loginModule, studentModule])
  .config(($routeProvider:angular.route.IRouteProvider) => {
    $routeProvider.otherwise('/students')
  });