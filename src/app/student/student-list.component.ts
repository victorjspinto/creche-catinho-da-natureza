import { ui } from 'angular';

class StudentListController {

    public helloWorld:String = "Ola Mundo";
    
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
            template: '<student-list></student-list>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });
    }).name