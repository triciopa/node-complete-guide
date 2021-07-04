const http = require('http');
const routes = require('./routes');

// function rqListener(req,res) {
// }
// http.createServer(rqListener);
// const server = http.createServer((req, res) => {
//   // console.log(req.url, req.method, req.headers);
//   // process.exit() //---> quits execution of the event loop
// });

const server = http.createServer(routes);

server.listen(3000);
