angular.module('creche.login')
  .controller('LoginCtrl', function($scope, $log) {

    $scope.login = function() {
      $log.log("Logging in user with username and password", $scope.username, $scope.password);
      firebase
        .auth()
        .signInWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {
          $log.log('erro ao realizar loging', error);
          $scope.invalidCredential = true;
        });
    };
  });
