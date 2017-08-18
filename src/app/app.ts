import * as angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-messages';

import 'angular-material/angular-material.css';
import './app.css';

import appModule from './app.component';
import classModule from './contact/contact';

interface FormAtributes extends ng.IAttributes {
  ngSubmit:any;
}

export default angular
  .module('app', ['ngMaterial', 'ngMessages', 'ui.router', appModule, classModule ])
  .config(($urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise( ($injector) => {
      var $state = $injector.get('$state');
      $state.go('contacts')
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
