
export default angular.module('firebase-adapter.ngroute', [])
    .run((angularFireAuth:angularfire.AngularFireAuth, $location:ng.ILocationService, $log:ng.ILogService) => {
        if(!angularFireAuth.$getAuth()) {
            $log.info('Non-logged user detected, redirecting to login');
            $location.path('/login');
        }
    });