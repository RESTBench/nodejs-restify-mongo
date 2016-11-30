import {Controller} from './controller';
import {Contact} from '../model/contact';

export class ContactController extends Controller {
    constructor () {
        super();
    }
    add(req, res, next){
        //resources
        let contact = new Contact();
        let requisition =  {
            'first_name':  req.params.first_name,
            'last_name': req.params.last_name,
            'age': req.params.age,
            };
        
        contact.add(requisition).then(function(error){
            if(contact.error !=null){
                res.send(500,contact.error);
            }else{
                res.send(201,{data:'OK'});
            }
            return next();
        });
    }

    postErrorHandler(error){
        if(error != null){
            res.send(500,contact.error);
        }else{
            res.send(201,{data:'OK'});
        }
        return next();
    }
}