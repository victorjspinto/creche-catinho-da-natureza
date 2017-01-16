declare function require(module: string):any;
declare var global:any;

// global.$ = global.jQuery = require('jquery');
require('angular');
require('angular-material');
require('angular-material/angular-material.css');
require('./app.css');

var firebase = require('firebase/app');
var config = {
  apiKey: "AIzaSyBjAR7takcSRt_3VU7T3grPxA5dUKgfZbo",
  authDomain: "creche-cantinho-da-natureza.firebaseapp.com",
  databaseURL: "https://creche-cantinho-da-natureza.firebaseio.com",
  storageBucket: "creche-cantinho-da-natureza.appspot.com",
  messagingSenderId: "507255567859"
};
firebase.initializeApp(config);

require('angularfire');

import sidebarMenu from "./sidebar-menu/index.ts";
import app from './app.component.ts';
import login from './login/login.component.ts';


export default angular
  .module('app', ['ngMaterial', sidebarMenu.name, app.name, login.name, 'firebase'])
  .run( ($log:ng.ILogService, $firebaseAuth:AngularFireAuth) => {
    $firebaseAuth.$authWithPassword({ email: "teste@teste", password: "password" })
      .then((result) => {
        $log.info(result);
      });
    // var db = new Firebase("https://creche-cantinho-da-natureza.firebaseio.com") ;
    // db.authWithPassword({ email: "teste", password : "teste2"}, (error, success) => {
    //   if(error) {
    //     $log.error(error);
    //   } else {
    //     $log.info(success);
    //   }
    // });

    
  });

