import { RaceService, Race } from './../../miscelaneous/race.service'

class StudentParentController {
    public races:Array<Race>;

    constructor(
        private raceService:RaceService,
    ) {
        this.races = raceService.find();
    }

}

export default angular.module('app.student.parent', [])
    .component('studentParent', {
        template: require('./parent.html'),
        controller: StudentParentController,
        controllerAs: 'ctrl',
        bindings: {
            parent: "="
        }
    }).name