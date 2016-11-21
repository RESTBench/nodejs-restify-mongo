export class Controller {
    constructor () {

    }
    answer(req, res, next){
        res.send('bem vindo ' + req.params.name);
        return next();
    }
}