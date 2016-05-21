'use strict';

/**
 * @ngdoc overview
 * @name crecheApp
 * @description
 * # crecheApp
 *
 * Main module of the application.
 */
angular
  .module('crecheApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'creche.login'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        isSecured: true,
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        isSecured: true,
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
