declare function require(module: string):any;
declare var global:any;

// global.$ = global.jQuery = require('jquery');
import angular = require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('../style/app.css');

import sidebarMenu from "./sidebar-menu/index.ts";

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
  .module('app', ['ngMaterial', sidebarMenu.name])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .run(() => {
    console.log("Rodou :)")
  });

