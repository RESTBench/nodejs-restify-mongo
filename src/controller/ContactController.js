import {Controller} from './controller';
import {Contact} from '../model/contact';

export class ContactController extends Controller {
    constructor () {
        super();
    }
    list(req, res, next){
        
    }
    change(req, res, next){

    }
    remove(req, res, next){

    }
    add(req, res, next){
        //resources
        let contact = new Contact();
        let requisition = {
            'first_name':  req.params.first_name,
            'last_name': req.params.last_name,
            'age': req.params.age,
        }
        
        contact.add(requisition).then(
            function(error){
                console.log('funcionou');
                console.log(contact.error);
                res.send(200,requisition);
                next();
            }
        );
    }
    search(req, res, next){
        
    }
}