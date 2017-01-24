import { material, ui, permission } from 'angular';

class LoginController {

    public username:String;
    public password:String;

    constructor(private $log:ng.ILogService, 
                private angularFireAuth:angularfire.AngularFireAuth,
                private PermPermissionStore:permission.PermissionStore,
                private $state:ui.IStateService
                ) {

    }

    public login() {

        this.angularFireAuth.$signInWithEmailAndPassword(this.username, this.password)
            .then((user) => {
                this.$log.info("User loggedin success", user);
                this.PermPermissionStore.definePermission('isAuthorized', () => true);
                this.$state.go('students');
            }, (cause) => {
                this.$log.error("user login fail with cause", cause);
            });
    }
}

class LogoutController {

    constructor(
        private $log:ng.ILogService, 
        private angularFireAuth:angularfire.AngularFireAuth,
        private PermPermissionStore:permission.PermissionStore,        
        private $state:ui.IStateService,
        private $mdSidenav:material.ISidenavService        
        ) {

    }

    public logout() {
        this.$log.log(this.angularFireAuth);
        this.angularFireAuth.$signOut()
            .then(() => {
                this.$log.info('Logout success');
                this.PermPermissionStore.clearStore();
                this.$state.go('login');
                this.$mdSidenav('left').toggle();
            }, (error) => {
                this.$log.error('Error while try to login with this given cause', error);
            })
    }
}

export default angular.module('app.login', [])
    .component('login', {
        controller: LoginController,
        controllerAs: 'ctrl',
        template: require('./login.html')
    })
    .controller('LogoutController', LogoutController)
    .config(($stateProvider:ui.IStateProvider) => {
        $stateProvider.state('login', {
            url: '/login',
            template: '<login layout="column" flex layout-fill></login>',
            data: {
                permissions: {
                    except: 'isAuthorized',
                    redirectTo: 'students'
                }
            }
        });
    }).name
    ;