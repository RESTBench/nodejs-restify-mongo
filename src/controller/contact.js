import {Controller} from './controller';
import {Contact} from '../model/contact';

export class ContactController extends Controller {
    constructor () {
        super();
    }
    list(req, res, next){
        //resources
        let contact = new Contact();
        let answer  = {'data': contact.findAll() };
        res.send(200,answer);
        return next();
    }
    change(req, res, next){

    }
    remove(req, res, next){

    }
    add(req, res, next){
        
    }
    search(req, res, next){
        
    }
}