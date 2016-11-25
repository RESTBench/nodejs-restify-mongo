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
        let answer  = contact.add(requisition);
        if(answer){
            res.send(300,{error:requisition});
        }
        res.send(200,{data:requisition});
        return next();
    }
    search(req, res, next){
        
    }
}