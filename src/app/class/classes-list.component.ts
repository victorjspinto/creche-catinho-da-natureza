import { ui, material } from 'angular';
import { ClassService, Class } from './class.service'

class ClassListController {

    public classes:angularfire.AngularFireArray<Class>

    constructor(private classService:ClassService,
                private $mdDialog:material.IDialogService) {
        this.classes = classService.find();
    }

    public remove(classe) {
        var confirm = this.$mdDialog.confirm()
            .title('Remover Turma')
            .textContent('Deseja realmente remover a turma ' + classe.name)
            .ok('Confirmar')
            .cancel('Cancelar');

        this.$mdDialog.show(confirm)
            .then(() => {
                this.classService.remove(classe);
            })        
    }
    
}

export default angular.module('app.class.list', [])
    .component('classList', {
        template: require('./classes-list.html'),
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