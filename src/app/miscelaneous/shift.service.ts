import {AbstractCrudService, AbstractEntity} from './../angularfire-adapter/abstractCrudService';

export class ShiftService extends AbstractCrudService<Shift> {

    constructor($firebaseObject, $firebaseArray) {
        super('shift', $firebaseObject, $firebaseArray);
    }

    generateIdentifier(entity:Shift):String {
        return entity.label;
    }
}

export class Shift extends AbstractEntity {
    public label:String;
    public value:String;
}

export default angular.module('app.miscelaneous.shift', [])
    .service('shiftService', ShiftService)
    .name;