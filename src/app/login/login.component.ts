
class Login {

    public username:String;
    public password:String;

    constructor(public $log:ng.ILogService) {

    }

    public login() {
        this.$log.debug("Login sendo realizado com o usuario [" , this.username, "] e senha [", this.password, "]");
    }
}

export default angular.module('app.login', [])
    .component('login', {
        controller: Login,
        controllerAs: 'ctrl',
        template: require('./login.html')
    });