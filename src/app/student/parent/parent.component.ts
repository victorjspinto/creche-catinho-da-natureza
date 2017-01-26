
class StudentParentController {
    
}

export default angular.module('app.student.parent', [])
    .component('studentParent', {
        template: require('./parent.html'),
        controller: StudentParentController,
        controllerAs: 'ctrl'
    }).name