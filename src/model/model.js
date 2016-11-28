import {MongoAdapter} from '../adapter/MongoAdapter.js';

export class Model {
    
    constructor (entityName, persistenceAttributes ) {
        this.entityName         = entityName;
        this.attributes         = persistenceAttributes;
        this.persistenceAdapter = this.getPersistenceAdapter(this.entityName, this.attributes);
        this.persistence        = this.persistenceAdapter.persistence;
    }
    getPersistenceAdapter(entityName,attributes){
        return new MongoAdapter(entityName,attributes);
    }
    getPersistence(documentName,attributes){
        return this.persistence;
    }

    add(attributes){
        new this.persistence(attributes).save(function (error) {
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