//Extract Module
var http = require('http');

//Create Webserver and start
http.createServer(function (request, response) {
    response.writeHead(404);
    response.end();
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});