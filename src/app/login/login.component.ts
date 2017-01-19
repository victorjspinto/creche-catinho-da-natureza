import { ui } from 'angular';

class LoginController {

    public username:String;
    public password:String;

    constructor(private $log:ng.ILogService, private angularFireAuth:angularfire.AngularFireAuth) {

    }

    public login() {

        this.angularFireAuth.$signInWithEmailAndPassword(this.username, this.password)
            .then((user) => {
                this.$log.info("User loggedin success", user);
            }, (cause) => {
                this.$log.error("user login fail with cause", cause);
            });
    }
}

export default angular.module('app.login', [])
    .component('login', {
        controller: LoginController,
        controllerAs: 'ctrl',
        template: require('./login.html')
    })
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