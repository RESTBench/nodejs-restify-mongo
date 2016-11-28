
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export class ContactSchema{

    constructor() {
        createSchema();
    }

    getSchemaName() {
        return 'Contact';
    }
    getSchemaAttributes(){
        let attributes={
            'first_name':{
                type:'string',
                required:true,
                maxlength:20
            },
            'last_name': {
                type:'string',
                required:true,
            },
            'age': {
                type:'number',
                required:true,
            }
        };
        return attributes;
    }
    createSchema(){
        let Schema  = mongoose.Schema;
        let schema  = new Schema(getSchemaAttributes());
        autoIncrement.initialize(mongoose.connection);
        schema.plugin(autoIncrement.plugin,{model: getSchemaName(), field: 'sequence', startAt: 1});
        console.log("sadasdasd");
        console.log(mongoose.model(getSchemaName(), schema));
    }

}