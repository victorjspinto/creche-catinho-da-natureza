import {AbstractCrudService, AbstractEntity} from './../angularfire-adapter/abstractCrudService';

export class RaceService extends AbstractCrudService<Race> {

    constructor($firebaseObject, $firebaseArray) {
        super('race', $firebaseObject, $firebaseArray);
    }

    generateIdentifier(entity:any):String {
        return entity.label;
    }

}

export class Race extends AbstractEntity {
    public label:String;
    public value:String;
}

export default angular.module('app.miscelaneous.race', [])
    .service('raceService', RaceService)
    .name;