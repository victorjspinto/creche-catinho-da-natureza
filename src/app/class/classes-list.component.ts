import { ui } from 'angular';
import { ClassService } from './class.service'
import { Class } from './class'

class ClassListController {

    public classes:angularfire.AngularFireArray<Class>

    constructor(private classService:ClassService) {
        this.classes = classService.find();
    }

    public remove(classe) {
        this.classService.remove(classe);
    }
    
}

export default angular.module('app.class.list', [])
    .component('classList', {
        template: require('./class-list.html'),
        controller: ClassListController,
        controllerAs: 'ctrl'
    })
    .config(($stateProvider:ui.IStateProvider) => {
        $stateProvider.state('classes', {
            url: '/classes',
            template: '<class-list layout="column" flex layout-fill></class-list>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });
    }).name;