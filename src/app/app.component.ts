import { material } from 'angular'

class AppController {

  constructor(private $mdSidenav:material.ISidenavService) {
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