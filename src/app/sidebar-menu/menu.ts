class MenuController {

    constructor(private $rootScope: ng.IRootScopeService, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, private $location: ng.ILocationService, public menu: MenuFactory) {
        $log.debug(this.menu.sections)
    }

    //functions for menu-link and menu-toggle
    public autoFocusContent = false;
    
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

class MenuFactory {

    constructor(public sections: any[], public openedSection: any) {
    }

    toggleSelectSection(section: any): void {
        this.openedSection = (this.openedSection === section ? null : section);
    }

    isSectionSelected(section: any): boolean {
        return this.openedSection === section;
    }

}

export default angular.module('sidebar.menucontroller', [])
    .controller('MenuController', MenuController)
    .factory('menu', (): MenuFactory => {
        var sections: any[] = [{
            name: 'Getting Started',
            state: 'home.gettingstarted',
            type: 'link'
        }];

        sections.push({
            name: 'Beers',
            type: 'toggle',
            pages: [
                {
                    name: 'IPAs',
                    type: 'link',
                    state: 'home.beers.ipas',
                    icon: 'fa fa-group'
                }, {
                    name: 'Porters',
                    state: 'home.beers.porters',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: 'Wheat',
                    state: 'home.beers.wheat',
                    type: 'link',
                    icon: 'fa fa-plus'
                }
            ]
        });

        sections.push({
            name: 'Munchies',
            type: 'toggle',
            pages: [
                {
                    name: 'Cheetos',
                    type: 'link',
                    state: 'munchies.cheetos',
                    icon: 'fa fa-group'
                }, {
                    name: 'Banana Chips',
                    state: 'munchies.bananachips',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: 'Donuts',
                    state: 'munchies.donuts',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                }
            ]
        });

        return new MenuFactory(sections, null);
    });
