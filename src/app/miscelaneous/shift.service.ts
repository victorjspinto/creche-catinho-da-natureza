import * as firebase from 'firebase';

export class ShiftService {

    constructor(private $firebaseObject, private $firebaseArray) {

    }

    public save(classDetail:any):ng.IPromise<void> {
        var ref = firebase.database().ref('shit/' + classDetail.$id);
        return this.$firebaseObject.$save(classDetail);
    }

    public find(): angularfire.AngularFireArray<any>{
        var ref = firebase.database().ref('shift/');
        return this.$firebaseArray(ref);
    }
}

export default angular.module('app.miscelaneous.shift', [])
    .service('shiftService', ShiftService)
    .name;