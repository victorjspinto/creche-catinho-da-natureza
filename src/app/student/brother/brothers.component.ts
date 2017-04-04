import { RaceService, Race } from './../../miscelaneous/race.service'

class BrothersController {

    public state:String = 'List';
    private action:String;
    private selected:any;

    public races:Array<Race>;

    constructor(
        private raceService:RaceService,
    ) {
        this.races = raceService.find();
    }

    public brothers;

    public add() {
        this.state = 'Edit';
        this.action = 'New';
        this.selected = {};
    }

    public edit(selected) {
        this.state = 'Edit';
        this.action = 'Alter';
        this.selected = selected;
    }

    public save() {
        if(this.action == 'New') {
            this.brothers = this.brothers || [];
            this.brothers.push(this.selected);
            this.selected = {};
        }
        this.state = 'List'
    }

    public cancel() {
        this.state = 'List';
        this.selected = {};
    }

    public remove(item) {
        let index = this.brothers.indexOf(item);
        if(index > -1) {
            this.brothers.splice(index, 1)
        }
    }
}

export default angular.module('app.student.brothers', [])
    .component('studentBrothers', {
        template: require('./brothers.html'),
        controller: BrothersController,
        controllerAs: 'ctrl',
        bindings: {
            brothers: "="
        }
    }).name;