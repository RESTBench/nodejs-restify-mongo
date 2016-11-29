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
    add(attributes ){
        let persistenceAdapter = this.persistenceAdapter;
        let callback = function(error){
            this.error = this.formatError(error);
        }
        return persistenceAdapter.add(attributes, callback.bind(this));
    }
    findOne(){
        
    }
    findAll(){
        
    }
    formatError(errors){
    
        let errorList = {
            type : errors.type,
            message : errors.message,
            attribute : errors.value
        };
        errors.forEach(function(key, value){
            error = {
                type : value.kind,
                message : value.message,
                value : value.value,
            };
            errorList.key = error;
        });
        return errorList;
    }
    getValidations(){}
    validate(){}
    getAtributes(){}
    setAtributes(){}    
}