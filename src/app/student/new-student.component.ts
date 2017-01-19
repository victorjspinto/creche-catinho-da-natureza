import studentComponent from './student-component';
import { ui } from 'angular'

class NewStudentController {

}

export default angular.module('app.student.new', [studentComponent])
    .component('newStudent', {
        template: require('./new-student.html'),
        controller: NewStudentController,
        controllerAs: 'ctrl'
    })
     .config(($stateProvider:ui.IStateProvider) => {
        $stateProvider.state('newStudent', {
            url: '/students/new',
            template: '<new-student layout="column" flex layout-fill></new-student>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });
    })
    .name;