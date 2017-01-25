import * as angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-messages';
import { permission, uiPermission } from 'angular-permission'

import 'angular-material/angular-material.css';
import './app.css';

import appModule from './app.component';
import loginModule from './login/login.component';
import firebaseAdapter from './angularfire-adapter/firebase.service';
import studentModule from './student/student';
import classModule from './class/class';
import miscelaneousModule from './miscelaneous/miscelaneous';

import * as firebase from 'firebase';

interface FormAtributes extends ng.IAttributes {
  ngSubmit:any;
}

export default angular
  .module('app', ['ngMaterial', 'ngMessages', 'ui.router', permission, uiPermission, appModule, firebaseAdapter, loginModule, studentModule, classModule, miscelaneousModule ])
  .config(($urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise( ($injector) => {
      var $state = $injector.get('$state');
      $state.go('students')
    });
  })
  .directive('form', () => {
    return {
      require: 'form',
      restrict: 'E',
      link: (scope, elem, attrs: FormAtributes, form:any) => {
        form.$submit = () => {
          form.$setSubmitted();
          scope.$eval(attrs.ngSubmit)
        };
      }
    };
  });
