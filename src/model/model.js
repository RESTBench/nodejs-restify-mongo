import {MongoAdapter} from '../adapter/MongoAdapter.js';

export class Model {
    
    constructor (entityName, persistenceAttributes ) {
        this.entityName         = entityName;
        this.attributes         = persistenceAttributes;
        this.persistenceAdapter = this.getPersistenceAdapter(this.entityName, this.attributes);
        this.persistence        = this.getPersistenceAdapter().persistence
    }
    getPersistenceAdapter(entityName,attributes){
        return new MongoAdapter(entityName,attributes);
    }
    getPersistence(documentName,attributes){
        return this.persistence;
    }

    add($attributes){
        let persistenceAdapter = this.getPersistenceAdapter();
        let contactAdded = {};
        new persistence(attributes).save(function (error) {
            this.error = error.errors;
        });
        if(this.error.length == 0) {
            return true;
        }
        return false;
    }

    findOne(){
        
    }

    findAll(){
        
    }

    getValidations(){}
    validate(){}
    getAtributes(){}
    setAtributes(){}    
}