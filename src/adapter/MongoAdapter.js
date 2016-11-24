import mongoose from 'mongoose';

export class MongoAdapter {
    constructor (documentName, attributes) {
        this.documentName    = documentName;
        this.shemaAttributes = attributes;
        this.persistence     = this.createSchema();
    }

    createSchema() {
        let Schema       = mongoose.Schema;
        let persistence  = new Schema(this.shemaAttributes);
        let model        = mongoose.model(this.documentName, persistence); 
        return model;
    }

}