import {MongoAdapter} from '../adapter/MongoAdapter.js';

export class Model {
    
    constructor (persistenceName, persistenceAttributes ) {
        this.persistenceName = persistenceName;
        this.attributes = persistenceAttributes;
        this.persistence = Model.getPersistence(this.persistenceName, this.attributes);
    }
    static getPersistence(documentName,attributes){
        return new MongoAdapter(documentName,attributes).persistence;
    }

    getValidations(){}
    validate(){}
    getAtributes(){}
    setAtributes(){}    
}