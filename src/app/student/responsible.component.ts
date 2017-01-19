class StudentResponsibleController {

    public state:String = 'List';
    private action:String;
    private selected:any;

    public responsibles = [{
        name: 'Victor Jose Silva Pinto',
        age: 30,
        telephone: 21865184989
    },{
        name: 'Victor Jose Silva Pinto',
        age: 30,
        telephone: 21865184989
    },{
        name: 'Victor Jose Silva Pinto',
        age: 30,
        telephone: 21865184989
    },{
        name: 'Victor Jose Silva Pinto',
        age: 30,
        telephone: 21865184989
    }];

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
            this.responsibles.push(this.selected);
            this.selected = {};
        }
        this.state = 'List'
    }

    public cancel() {
        this.state = 'List';
        this.selected = {};
    }

    public remove(item) {
        let index = this.responsibles.indexOf(item);
        if(index > -1) {
            this.responsibles.splice(index, 1)
        }
    }
}

export default angular.module('app.student.responsible', [])
    .component('studentResponsible', {
        template: require('./responsible.html'),
        controller: StudentResponsibleController,
        controllerAs: 'ctrl'
    }).name;