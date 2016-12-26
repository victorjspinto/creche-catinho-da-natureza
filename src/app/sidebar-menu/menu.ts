class MenuController {

    constructor(private $rootScope: ng.IRootScopeService, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, private $location: ng.ILocationService, private menu:any) {

    }

    public status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    public isOpen(section) {
        return this.menu.isSectionSelected(section);
    }

    public toggleOpen(section) {
        this.menu.toggleSelectSection(section);
    }
}

export default angular.module('sidebar.menucontroller', [])
    .controller('MenuController', MenuController)


    //http://plnkr.co/edit/KNKe1PjhmgnMSPKsPvvC?p=preview
    //http://brilliantbritz.com/2015/06/17/creating-your-own-angular-material-right-navigation-menu/