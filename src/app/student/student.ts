import studentList from './student-list.component'
import newStudent from './new-student.component'
import responsible from './responsible/responsible.component'
import parent from './parent/parent.component'
import brother from './brother/brothers.component'
import comments from './comments/comments.component'
import studentServiceModule from './student.service'

export default angular.module('student', [studentList, newStudent, responsible, parent, brother, studentServiceModule, comments]).name