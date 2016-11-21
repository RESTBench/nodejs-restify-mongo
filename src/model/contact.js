import {Model} from './model';
import {Address} from './address';

export class Contact extends Model {
    constructor () {
        super();
    }

    getAddressList(){
        let address = new Address();
        let addressList = address.findAll();
        return addressList;
    }

    findOne(){
        let answer = {
            'id': this.id,
            'first_name': this.first_name,
            'last_name': this.last_name,
            'age': this.age,
            'address' : []
        };
        return answer;
    }

    findAll(){
        let contact1 = {
            'id': 1,
            'first_name': 'James',
            'last_name': 'ho',
            'age': '23',
            'address': this.getAddressList()
        };
        let contact2 = {
            'id': 1,
            'first_name': 'James',
            'last_name': 'ho',
            'age': '23',
            'address': this.getAddressList()
        };
        let contact3 = {
            'id': 1,
            'first_name': 'James',
            'last_name': 'ho',
            'age': '23',
            'address': this.getAddressList()
        };
        return [contact1, contact2, contact3];
    }

}