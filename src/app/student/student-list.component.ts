class StudentListController {

    public helloWorld:String = "Ola Mundo";
}

export default angular.module('app.student.list', [])
    .component('studentList', {
        controller: StudentListController,
        controllerAs: 'ctrl',
        template: require('./student-list.html')
    })
    .config(($routeProvider) => {
        $routeProvider.when('/students', {
            template: '<student-list></student-list>'
        })
    }).name