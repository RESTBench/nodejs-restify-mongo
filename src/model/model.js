import {MongoAdapter} from '../adapter/MongoAdapter.js';

export class Model {
    
    constructor (entityName) {
        this.entityName         = entityName;
        this.persistenceAdapter = this.getPersistenceAdapter(this.entityName);
        this.persistence        = this.persistenceAdapter.persistence;
    }
    getPersistenceAdapter(entityName){
        return new MongoAdapter(entityName);
    }
    getPersistence(documentName,attributes){
        return this.persistence;
    }

    add(attributes){
        let persistenceAdapter = this.persistenceAdapter;
        if(!persistenceAdapter.add(attributes)){
            this.error = persistenceAdapter.error;
            return false;
        }
        return true;
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