declare function require(module: string):any;
declare var global:any;

global.$ = global.jQuery = require('jquery');
import angular = require('angular');

require('../style/app.css');

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  private url:String;
  
  constructor($log:ng.ILogService) {
    this.url = 'https://github.com/preboot/angular-webpack';
    $log.info("Tipagem funcionou!");
  }
}

export default angular
  .module('app', [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

