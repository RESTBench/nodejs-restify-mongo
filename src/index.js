/*jslint node: true, indent: 2 */
'use strict';

import restify from 'restify';
import bunyan from 'bunyan';
import routes from './routes';
import mongoose from 'mongoose';

var log = bunyan.createLogger({
  name        : 'nodejs-restify-mongo',
  level       : process.env.LOG_LEVEL || 'info',
  stream      : process.stdout,
  serializers : bunyan.stdSerializers
});



var server = restify.createServer({
  name : 'nodejs-restify-mongo',
  log  : log,
  formatters : {
    'application/json' : function (req, res, body, cb) {
      res.setHeader('Cache-Control', 'must-revalidate');

      // Does the client *explicitly* accepts application/json?
      var sendPlainText = (req.header('Accept').split(/, */).indexOf('application/json') === -1);

      // Send as plain text
      if (sendPlainText) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      }

      // Send as JSON
      if (!sendPlainText) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      return cb(null, JSON.stringify(body));
    }
  }
});

server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.pre(restify.pre.sanitizePath());

/*jslint unparam:true*/
// Default error handler. Personalize according to your needs.
server.on('uncaughtException', function (req, res, route, err) {
  console.log('******* Begin Error *******');
  console.log(route);
  console.log('*******');
  console.log(err.stack);
  console.log('******* End Error *******');
  if (!res.headersSent) {
    return res.send(500, { ok : false });
  }
  res.end();
});
/*jslint unparam:false*/

server.on('after', restify.auditLogger({ log: log }));
function connect () {
  return mongoose.connect('mongodb://localhost:27017/myapp').connection;
}

const connection = connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  routes(server);
  console.log('Express app started on port');
}

console.log('Server started.');
server.listen(8887, function () {
  log.info('%s listening at %s', server.name, server.url);
});

