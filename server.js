const http = require('http');
const app = require('./backend/app');
const debug = require("debug")("node-angular");
const port = process.env.PORT || 3000;

/*http.createServer((req, res) => {
  res.end('first response');
}).listen(process.env.PORT || 3000);*/

app.set('port', port);
const server = http.createServer(app).listen(port);

