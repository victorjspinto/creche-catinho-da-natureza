declare function require(module: string): any;

import angular = require('angular');
require("./style.css");

import menuLink from "./menulink";
import menuToggle from "./menutoggle";
import menuController from "./menu";

export default angular.module('sidebar', [
    menuLink.name,
    menuToggle.name,
    menuController.name
])
