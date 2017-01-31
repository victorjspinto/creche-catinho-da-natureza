import { ui, material } from 'angular';
import { StudentService, Student } from './student.service'


class StudentListController {

    public students = [];
    
    constructor(
        private studentService:StudentService,
        private $mdDialog:material.IDialogService
    ) {
        this.students = studentService.find();
    }

    public remove(student) {
        var confirm = this.$mdDialog.confirm()
            .title('Remover Turma')
            .textContent('Deseja realmente remover o aluno ' + student.name)
            .ok('Confirmar')
            .cancel('Cancelar');

        this.$mdDialog.show(confirm)
            .then(() => {
                this.studentService.remove(student);
            })        
    }
    
}

export default angular.module('app.student.list', [])
    .component('studentList', {
        controller: StudentListController,
        controllerAs: 'ctrl',
        template: require('./student-list.html')
    })
    .config(($stateProvider:ui.IStateProvider) => {
        $stateProvider.state('students', {
            url: '/students',
            template: '<student-list layout="column" flex layout-fill></student-list>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });
    }).name