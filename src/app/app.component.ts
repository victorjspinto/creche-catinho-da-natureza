import { material } from 'angular'

class AppController {

  constructor(
      ) {

  }

}

export default angular.module('app.component', [])
    .component('app', {
        template: require('./app.html'),
        controller: AppController,
        controllerAs: 'ctrl'
    }).name