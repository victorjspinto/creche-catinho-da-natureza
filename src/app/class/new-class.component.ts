import { ClassService, Class } from './class.service'
import { ui } from 'angular'
import { PeriodService } from './../miscelaneous/period.service'
import { ShiftService } from './../miscelaneous/shift.service'

class NewClassController {
    
    public newClass: Class = new Class();

    public periods:any;
    public shifts:any;

    constructor(
        private classService:ClassService,
        private $state:ui.IStateService,
        private $log:ng.ILogService,
        private periodService:PeriodService,
        private shiftService:ShiftService,
        private $stateParams:ui.IStateParamsService
        ) {
        
        this.periods = periodService.find();
        this.shifts = shiftService.find();

        if($stateParams['classId'] != null) {
            this.newClass = classService.findOne($stateParams['classId']);
        }
    }

    public save() {
        this.classService.save(this.newClass)
            .then(() => {
                this.$state.go('classes');
            });
    }
}

export default angular.module('app.class.new', [])
    .component('newClass', {
        template: require('./new-class.html'),
        controller: NewClassController,
        controllerAs: 'ctrl'
    })
    .config(($stateProvider:ui.IStateProvider) => {
         $stateProvider.state('newClass', {
            url: '/classes/new',
            template: '<new-class layout="column" flex layout-fill></new-class>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        })
        .state('editClass', {
            url: '/classes/:classId',
            template: '<new-class layout="column" flex layout-fill></new-class>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });;
    })
    .name;
