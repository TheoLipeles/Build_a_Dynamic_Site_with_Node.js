
var router = require("./router.js");

// Create Server
var http = require('http');
http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
    //response.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


















