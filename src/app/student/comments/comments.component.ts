class StudentCommentsController {

    public state:String = 'List';
    private action:String;
    private selected:any;
    private comments:Array<Object>;

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
            this.comments = this.comments || [];
            this.comments.push(this.selected);
            this.selected = {};
        }
        this.state = 'List'
    }

    public cancel() {
        this.state = 'List';
        this.selected = {};
    }

    public remove(item) {
        let index = this.comments.indexOf(item);
        if(index > -1) {
            this.comments.splice(index, 1)
        }
    }
}

export default angular.module('app.student.comments', [])
    .component('studentComments', {
        template: require('./comments.html'),
        controller: StudentCommentsController,
        controllerAs: 'ctrl',
        bindings: {
            comments: '='
        }
    }).name;