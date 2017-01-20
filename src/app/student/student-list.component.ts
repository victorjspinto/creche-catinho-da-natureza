import { ui } from 'angular';



class StudentListController {

    public students = [];
    
    constructor() {
        let x = 0;
        while (x < 100) {
            this.students.push(
            {
                id: x,
                name: 'Victor Jose Silva Pinto',
                photo: 'https://placekitten.com/g/50/50'
            });
            x = x + 1;
        }
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