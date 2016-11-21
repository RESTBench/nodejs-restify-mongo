import {Controller} from './controller';
import {Contact} from '../model/contact';

export class ContactController extends Controller {
    constructor () {
        super();
    }
    findAll(req, res, next){
        //resources
        let contact = new Contact();
        let answer  = {'data': contact.findAll() };
        res.send(200,answer);
        return next();
    }
    update(){

    }
    delete(){

    }
    insert(req, res, next){
        
    }
}