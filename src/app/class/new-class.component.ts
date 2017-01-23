import { ClassService } from './class.service'
import { Class } from './class'
import { ui } from 'angular'
import { PeriodService } from './../miscelaneous/period.service'
import { ShiftService } from './../miscelaneous/shift.service'

class NewClassController {
    
    public newClass: Class = {};

    public periods:any;
    public shifts:any;

    constructor(
        private classService:ClassService,
        private $state:ui.IStateService,
        private $log:ng.ILogService,
        private periodService:PeriodService,
        private shiftService:ShiftService,
        ) {
        
        this.periods = periodService.find();
        this.shifts = shiftService.find();
    }

    public save() {
        this.$log.info("Attempt to save class with value", this.newClass);
        
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
        });
    })
    .name;
