export class Controller {
    constructor () {

    }
    notImplemented(req, res, next){
        res.send('bem vindo ' + req.params.name);
        return next();
    }



    prepareAnswer(answer) {
        if(!answer) {
            return {'error':answer};
        }
        
    }
}