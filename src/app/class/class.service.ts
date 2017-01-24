import * as firebase from 'firebase';
import { Class } from './class'

export class ClassService {

    constructor(private $firebaseObject, private $firebaseArray) {

    }

    public save(classDetail:Class):ng.IPromise<void> {
        classDetail.$id = classDetail.name + '-' + classDetail.shift + '-' + classDetail.period;
        classDetail.$id = classDetail.$id.replace(/\s/g,'');
        var ref = firebase.database().ref('classes/' + classDetail.$id);
        var firebaseObj = this.$firebaseObject(ref);
        angular.copy(classDetail, firebaseObj);
        return firebaseObj.$save();
    }

    public find(): angularfire.AngularFireArray<Class>{
        var ref = firebase.database().ref('classes/');
        return this.$firebaseArray(ref);
    }

    public remove(classe:Class) :ng.IPromise<void> {
        var ref = firebase.database().ref('classes/' + classe.$id);
        return this.$firebaseObject(ref).$remove();
    }

}

export default angular.module('app.class.service', [])
    .service('classService', ClassService)
    .name;