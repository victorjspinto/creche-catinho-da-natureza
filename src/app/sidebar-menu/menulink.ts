
let addMenuLinkTemplateToTemplateCache = ($templateCache: ng.ITemplateCacheService) => {
    $templateCache.put('partials/menu-link.tmpl.html',
        '<md-button ng-class="{\'{{section.icon}}\' : true}" \n' +
        '  ui-sref-active="active" ui-sref="{{section.state}}" ng-click="focusSection()">\n' +
        '  {{section | humanizeDoc}}\n' +
        '  <span class="md-visually-hidden "\n' +
        '    ng-if="isSelected()">\n' +
        '    current page\n' +
        '  </span>\n' +
        '</md-button>\n' +
        '');
};

interface MenuLinkScope extends ng.IScope {
    focusSection(): void
}

let menuLinkDirective = ():ng.IDirective => {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'partials/menu-link.tmpl.html',
        link: ($scope: MenuLinkScope, $element) => {
            var controller = $element.parent().controller();

            $scope.focusSection = function () {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                controller.autoFocusContent = true;
            };
        }
    }
};

export default angular.module('sidebar.menulink', [])
    .run(addMenuLinkTemplateToTemplateCache)
    .directive('menuLink', menuLinkDirective);
