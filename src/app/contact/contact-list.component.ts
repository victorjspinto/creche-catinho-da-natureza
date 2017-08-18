import { ui, material } from 'angular';

class ContactListController {

    public contacts;

    constructor(private $mdDialog:material.IDialogService, $log:ng.ILogService) {
        $log.log("Compilou!!!");
    }
  
}

export default angular.module('app.class.list', [])
    .component('classList', {
        template: require('./contact-list.html'),
        controller: ContactListController,
        controllerAs: 'ctrl'
    })
    .config(($stateProvider:ui.IStateProvider) => {
        $stateProvider.state('contacts', {
            url: '/contacts',
            template: '<class-list layout="column" flex layout-fill></class-list>'
        });
    }).name;