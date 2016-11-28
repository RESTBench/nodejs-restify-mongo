import mongoose from 'mongoose';

export class MongoAdapter {
    constructor (documentName, attributes) {
        this.documentName    = documentName;
        this.persistence     = mongoose.model(this.documentName);
    }

    add(attributes){
        let document = mongoose.model(this.documentName);
        let newDocument = new document(attributes);
        newDocument.save(function (error) {
           if(!typeof error == null) { 
               this.error = error.errors;
               return false;
            }
        });
    }

}