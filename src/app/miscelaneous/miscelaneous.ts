import periodModule from './period.service'
import shiftModule from './shift.service'

export default angular.module('app.miscelaneous', [periodModule, shiftModule])
    .name;