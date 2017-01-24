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

export default angular
  .module('app', ['ngMaterial', 'ngMessages', 'ui.router', permission, uiPermission, appModule, firebaseAdapter, loginModule, studentModule, classModule, miscelaneousModule ])
  .config(($urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise( ($injector) => {
      var $state = $injector.get('$state');
      $state.go('students')
    });
  })
  .run(($firebaseObject, $log:ng.ILogService) => {
    var identifier = 'victorjspinto'
    var ref = firebase.database().ref('students/' + identifier);
    var studentInstance = $firebaseObject(ref);
    studentInstance.name = 'Victor Jose Silva Pinto';
    studentInstance.$save()
      .then((ref) => {
        $log.info(ref);
        $log.info(studentInstance);

      }, (error) => {
        $log.error(error);
      })
  });
