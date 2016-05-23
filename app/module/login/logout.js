angular.module('creche.login')
  .controller('LogoutCtrl', function($scope, $log, $location) {

    $scope.logout = function() {
      $log.log('Signing out');
      firebase.auth().signOut().then(function() {
        $location.path('/login');
        $log.log('Signout success')
      }, function(error) {
        $log.error('Signout Error', error);
      });;
    };
  });
