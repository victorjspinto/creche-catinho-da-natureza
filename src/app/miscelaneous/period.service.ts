import * as firebase from 'firebase';

export class PeriodService {

    constructor(private $firebaseObject, private $firebaseArray) {

    }

    public save(classDetail:any):ng.IPromise<void> {
        var ref = firebase.database().ref('period/' + classDetail.$id);
        return this.$firebaseObject.$save(classDetail);
    }

    public find(): angularfire.AngularFireArray<any>{
        var ref = firebase.database().ref('period/');
        return this.$firebaseArray(ref);
    }
}

export default angular.module('app.miscelaneous.period', [])
    .service('periodService', PeriodService)
    .name;