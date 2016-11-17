let answer = function(req, res, next){
   res.send('hello ' + req.params);
   
   return next();
}
import {Contact} from "../controller/contact";
let contact = new Contact();

module.exports = function (server) {

  server.get('contacts/', contact.answer);
  server.get('contacts/id/:id', contact.answer);
  server.del('/contacts/id/:id', contact.answer);
  server.post('/contacts/', contact.answer);
  server.put('/contacts/', contact.answer);

  // server.get('/contacts/address', answer);
  // server.get('/contacts/:id/address/:addr_id', answer);
  // server.del('/contacts/:id/address/:addr_id', answer);
  // server.post('/contacts/address', answer);
  // server.put('/contacts/:id/address/:addr_id', answer);

};