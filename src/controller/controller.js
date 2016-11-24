export class Controller {
    constructor () {

    }
    answer(req, res, next){
        res.send('bem vindo ' + req.params.name);
        return next();
    }

    prepareAnswer(answer) {
        if(!answer) {
            return {'error':answer};
        }
        
    }
}