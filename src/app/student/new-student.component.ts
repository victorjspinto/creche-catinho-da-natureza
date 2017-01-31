import studentComponent from './student-component';
import { ui } from 'angular'
import { Student, StudentService } from './student.service'
import { RaceService, Race } from './../miscelaneous/race.service'

class NewStudentController {

    public student:Student = new Student();

    public maxBirthDay:Date = new Date();

    public races:Array<Race>;

    constructor(
        private $log:ng.ILogService,
        private raceService:RaceService,
        private $state:ui.IStateService,
        private studentService:StudentService,
        private $stateParams:ui.IStateParamsService
    ) {
        this.races = raceService.find();
        if($stateParams['studentId'] != null) {
            this.student = studentService.findOne($stateParams['studentId']);
        }
    }

    public save() {
        this.$log.info('Attempt to save student ', this.student);
        this.studentService.save(this.student)
            .then(() => {
                this.$state.go('students');
            }, (error) => {
                this.$log.error('Error While try to save', error);
            });
    }
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
        })
        .state('editStudent', {
            url: '/students/:studentId',
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