import { route } from 'angular';

export default angular.module('firebase-adapter.ngroute', [])
    .config(($urlRouterProvider) => {
        // Prevent router from automatic state resolving
        $urlRouterProvider.deferIntercept();
    })
    .run((angularFireAuth:angularfire.AngularFireAuth, $location:ng.ILocationService, $urlRouter, $log:ng.ILogService) => {
        angularFireAuth.$requireSignIn().then((user) => {
            
        }).finally(() => {
            // Once permissions are set-up 
            // kick-off router and start the application rendering
            $urlRouter.sync();
            // Also enable router to listen to url changes
            $urlRouter.listen();
        });
    })