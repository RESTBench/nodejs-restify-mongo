import {Model} from './model';
import {Address} from './address';
import mongoose from 'mongoose';

export class Contact extends Model {
    constructor () {
        let Schema = mongoose.Schema;
        let attributes = {
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
            },
            'address' : [new Schema({ 
                            street:{
                                type:'string',
                                required:true
                            },
                            'number':{
                                type:'number',
                                required:true
                            },
                            line_2:{
                                type:'string',
                            },
                            postal_code:{
                                type:'string',
                                required:true
                            },
                            country:{
                                type:'string',
                                required:true
                            }
                    }
            )]
        };
        super('contact', attributes);
        this.attributes = attributes;
    }

    getPersistenceAttributes(){
        return this.attributes;
    }

    getAddressList(){
        return this.persistence.address;
    }

}