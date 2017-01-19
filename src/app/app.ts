import * as angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import { permission, uiPermission } from 'angular-permission'

import 'angular-material/angular-material.css';
import './app.css';

import appModule from './app.component';
import loginModule from './login/login.component';
import firebaseAdapter from './angularfire-adapter/firebase.service';
import studentModule from './student/student'

export default angular
  .module('app', ['ngMaterial', 'ui.router', permission, uiPermission, appModule, firebaseAdapter, loginModule, studentModule ])
  .config(($urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise( ($injector) => {
      var $state = $injector.get('$state');
      $state.go('students')
    });
  });
