import {ContactController} from "../controller/contact";
let contact = new ContactController();

module.exports = function (server) {

  server.get('contacts/', contact.findAll);
  server.get('contacts/id/:id', contact.answer);
  server.del('/contacts/id/:id', contact.answer);
  server.post('/contacts/', contact.answer);
  server.put('/contacts/', contact.answer);

  server.get('/contacts/:id/address', contact.answer);
  server.get('/contacts/:id/address/:addr_id', contact.answer);
  server.del('/contacts/:id/address/:addr_id', contact.answer);
  server.post('/contacts/:id/address', contact.answer);
  server.put('/contacts/:id/address/:addr_id', contact.answer);
};