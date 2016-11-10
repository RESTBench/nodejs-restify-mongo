export class Contact {
    constructor (id, x, y) {
        this.id = id
    }
    answer(req, res, next){
        res.send('bem vindo ' + req.params.name);
        return next();
    }
}