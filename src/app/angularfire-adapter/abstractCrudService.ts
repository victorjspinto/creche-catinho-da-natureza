import * as firebase from 'firebase';
import { removeDiacritics } from './../util/StringUtils'


export abstract class AbstractCrudService<T extends AbstractEntity> {
    constructor(
        private context:String,
        private $firebaseObject, 
        private $firebaseArray) {

    }

    public save(newEntity:any):ng.IPromise<void> {
        var identifier = this.generateIdentifier(newEntity);
        // remove accents and spaces
        identifier = removeDiacritics(identifier).replace(/\s/g,'');
        var ref = firebase.database().ref(this.context + '/' + identifier);
        
        var firebaseObj = this.$firebaseObject(ref);
        angular.copy(newEntity, firebaseObj);
        firebaseObj.id = identifier;
        return firebaseObj.$save();
    }

    public find(): angularfire.AngularFireArray<T>{
        var ref = firebase.database().ref(this.context + '/');
        return this.$firebaseArray(ref);
    }

    public remove(entityToRemove:T) :ng.IPromise<void> {
        var ref = firebase.database().ref('classes/' + entityToRemove.id);
        return this.$firebaseObject(ref).$remove();
    }
    
    abstract generateIdentifier(entity:T):String;
}

export abstract class AbstractEntity {
    public id:String;
}