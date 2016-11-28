import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export class MongoAdapter {
    constructor (documentName, attributes) {
        this.documentName    = documentName;
        this.shemaAttributes = attributes;
        this.persistence     = this.createSchema();
    }

    createSchema() {
        console.log("AQUIIIIIII");
        console.log(this.documentName);
        let Schema       = mongoose.Schema;
        let persistence  = new Schema(this.shemaAttributes);
        autoIncrement.initialize(mongoose.connection);
        persistence.plugin(autoIncrement.plugin,{model: this.documentName, field: 'sequence', startAt: 1});
        return mongoose.model(this.documentName, persistence); 
    }

    add(attributes){
        let persistence = this.persistence;
    }

}