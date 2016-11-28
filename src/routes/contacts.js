import {ContactController} from "../controller/ContactController";
let contact = new ContactController();

module.exports = function (server) {

  //defining contact routes
  server.get('contacts/', contact.list);
  server.get('contacts/id/:id', contact.search);
  server.del('/contacts/id/:id', contact.remove);
  server.post('/contacts/', contact.add);
  server.put('/contacts/:id', contact.answer);


  //defining entity children

  //address
  server.get('/contacts/:id/address', contact.answer);
  server.get('/contacts/:id/address/:addr_id', contact.answer);
  server.del('/contacts/:id/address/:addr_id', contact.answer);
  server.post('/contacts/:id/address', contact.answer);
  server.put('/contacts/:id/address/:addr_id', contact.answer);
};