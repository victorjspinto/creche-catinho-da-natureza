require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('./app.css');

import appModule from './app.component';
import loginModule from './login/login.component';
import firebaseAdapter from './angularfire-adapter/firebase.service';

export default angular
  .module('app', ['ngMaterial', appModule.name, loginModule.name, firebaseAdapter.name]);

