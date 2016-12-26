declare function require(module: string): any;

import angular = require('angular');
require("./style.css");

import menuLink from "./menulink.ts";
import menuToggle from "./menutoggle.ts";
import menuController from "./menu.ts";

export default angular.module('sidebar', [
    menuLink.name,
    menuToggle.name,
    menuController.name
])
