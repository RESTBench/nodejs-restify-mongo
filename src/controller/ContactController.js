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
        let answer  = contact.add({
            'first_name':  req.params.first_name,
            'last_name': req.params.last_name,
            'age': req.params.age,
        });
        res.send(200,prepareAnswer(answer));
        return next();
    }
    search(req, res, next){
        
    }
}