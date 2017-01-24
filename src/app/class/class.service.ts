import { AbstractCrudService , AbstractEntity } from './../angularfire-adapter/abstractCrudService';

export class ClassService extends AbstractCrudService <Class> {

    constructor($firebaseObject, $firebaseArray) {
        super('classes', $firebaseObject, $firebaseArray);
    }

    generateIdentifier(entity:Class):String {
        var identifier = entity.name + '-' + entity.period;
        return identifier;
    }

}

export class Class extends AbstractEntity {
    public name:String;
    public shift:String;
    public period:String;
}

export default angular.module('app.class.service', [])
    .service('classService', ClassService)
    .name;