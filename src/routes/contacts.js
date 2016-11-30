import {ContactController} from "../controller/ContactController";
let contact = new ContactController();

module.exports = function (server) {

  //defining contact routes
  server.get('contacts/', contact.notImplemented);
  server.get('contacts/id/:id', contact.notImplemented);
  server.del('/contacts/id/:id', contact.notImplemented);
  server.post('/contacts/', contact.add);
  server.put('/contacts/:id', contact.notImplemented);


  //defining entity children

  //address
  server.get('/contacts/:id/address', contact.notImplemented);
  server.get('/contacts/:id/address/:addr_id', contact.notImplemented);
  server.del('/contacts/:id/address/:addr_id', contact.notImplemented);
  server.post('/contacts/:id/address', contact.notImplemented);
  server.put('/contacts/:id/address/:addr_id', contact.notImplemented);
};