//Extract Module
var fs = require('fs');

//Create Server
var server = require('http').createServer();
var io = require('socket.io').listen(server);

//Execute Server
server.listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

//Connect Webserver Event
server.on('request', function (request, response) {
    fs.readFile('HTML2.html', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.end(data);
    });
});