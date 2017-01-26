import { material } from 'angular'

class AppController {

  public canShowMenu:Boolean;

  constructor(
      private $mdSidenav:material.ISidenavService,
      private angularFireAuth:angularfire.AngularFireAuth
      ) {
    
    this.canShowMenu = angularFireAuth.$getAuth() != null;
    angularFireAuth.$onAuthStateChanged((user) => {
      this.canShowMenu = user != null;
    })

  }

  public toggleSidenav(menuId:string) {
    this.$mdSidenav('left').toggle();
  }
}

export default angular.module('app.component', [])
    .component('app', {
        template: require('./app.html'),
        controller: AppController,
        controllerAs: 'ctrl'
    }).name