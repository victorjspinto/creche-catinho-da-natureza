angular.module('creche.login', [])
  .run(function($location, $rootScope, $loginService) {
    firebase.auth().onAuthStateChanged(function(user) {
      var route;
      if (user) {
        route = '/';
      } else {
        route = '/login';
      }
      $rootScope.$apply(function() {
        $loginService.setCurrentUser(user);
        $location.path(route);
      });
    });
  })

  .config(function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'module/login/login.html',
      controller: 'LoginCtrl'
    })
  })

  .service('$loginService', function() {
    var currentUser = undefined;
    return {
      setCurrentUser: function(user) { currentUser = user; },
      currentUser: function() { return currentUser; }
    }
  })

  .run(function($rootScope, $loginService, $location) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if(!$loginService.currentUser() && current.isSecured) {
        $location.path('/login');
      }
    });
  });
