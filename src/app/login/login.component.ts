class LoginController {

    public username:String;
    public password:String;

    constructor(private $log:ng.ILogService, private angularFireAuth:angularfire.AngularFireAuth) {

    }

    public login() {
        this.$log.debug("Login sendo realizado com o usuario [" , this.username, "] e senha [", this.password, "]");
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
    });