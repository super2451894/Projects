//Extract Module
var http = require('http');

//Make Server object
var server = http.createServer();

//Connect ServerObject
server.on('request', function () {
    console.log('Request On');
});

server.on('connection', function () {
    console.log('Connection On');
});

server.on('close', function () {
    console.log('Close On');
});

//Start listen() method
server.listen(50000);