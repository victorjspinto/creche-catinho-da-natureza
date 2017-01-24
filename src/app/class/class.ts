import classList from './classes-list.component'
import newClassModule from './new-class.component'
import classService from './class.service'

export default angular.module('app.class', [classList, newClassModule, classService]).name;