import { route } from 'angular';

export interface SecurableRoute extends route.IRoute {
    isSecured?:Boolean;
}

export default angular.module('firebase-adapter.ngroute', [])
    .run((angularFireAuth:angularfire.AngularFireAuth, $location:ng.ILocationService, $log:ng.ILogService) => {
        if(!angularFireAuth.$getAuth()) {
            $log.info('Non-logged user detected, redirecting to login');
            $location.path('/login');
        }
    })
    .run(($rootScope:ng.IScope, angularFireAuth:angularfire.AngularFireAuth, $location:ng.ILocationService, $log:ng.ILogService) => {
        $rootScope.$on('$routeChangeStart', (event, next:SecurableRoute) => {
            if(next.isSecured) {
                if(!angularFireAuth.$getAuth()) {
                    $log.info('Non logged user trying to access Route [', next, ']');
                    $location.path('/login');
                }
            }
        })
    });