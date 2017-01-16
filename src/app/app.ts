declare function require(module: string):any;
declare var global:any;

// global.$ = global.jQuery = require('jquery');
import angular = require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('./app.css');

import sidebarMenu from "./sidebar-menu/index.ts";
import app from './app.component.ts';
import login from './login/login.component.ts';

export default angular
  .module('app', ['ngMaterial', sidebarMenu.name, app.name, login.name]);

