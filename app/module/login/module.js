angular.module('creche.login', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'module/login/login.html',
      controller: 'LoginCtrl'
    })
  })

  .service('$loginService', function($q, $location) {
    var currentUser = undefined;

    var defer = $q.defer();
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        currentUser = user;
        if($location.path() === '/login') {
          $location.path('/');
        }
      } else {
        currentUser = false;

        if($location.path() !== '/login') {
          $location.path('/login');
        }
      }

      defer.resolve(currentUser);
    });

    return {
      currentUser: function() {
        if(currentUser !== undefined) {
          return $q.when(currentUser);
        }
        return defer.promise;
      }
    }
  })

  .run(function($rootScope, $loginService, $location) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $loginService
        .currentUser()
        .then(function(user) {
          if(!user && current.isSecured) {
            $location.path('/login');
          }
        })
    });
  });
