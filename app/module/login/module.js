angular.module('creche.login', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'module/login/login.html',
      controller: 'LoginCtrl'
    })
  })

  .run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if(!firebase.auth().currentUser && current.isSecured) {
        $location.path('/login');
      }
    });
  });
