import periodModule from './period.service'
import shiftModule from './shift.service'
import raceModule from './race.service'

export default angular.module('app.miscelaneous', [periodModule, shiftModule, raceModule])
    .name;