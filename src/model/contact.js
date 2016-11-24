import {Model} from './model';
import {Address} from './address';

export class Contact extends Model {
    constructor () {
        let attributes = {
            'first_name': 'string',
            'last_name': 'string',
            'age': 'number',
            'address' : []
        };
        super('contact', attributes);
        this.attributes = attributes;
    }

    add(contactAttributes){
        let contact = this.persistence;
        let contactAdded = {};
        new contact(contactAttributes).save(function (err) {
        if (err) console.log(err);
             console.log('acertouuuuuuuuuuuuuuuuu');
        });
    }

    getPersistenceAttributes(){
        return this.attributes;
    }

    getAddressList(){
        let address = new Address();
        let addressList = address.findAll();
        return addressList;
    }

    findOne(){
        
    }

    findAll(){
        
    }

}