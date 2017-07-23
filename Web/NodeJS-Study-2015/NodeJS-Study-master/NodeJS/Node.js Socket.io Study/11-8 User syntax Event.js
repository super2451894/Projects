// Extract Module
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// Create Webserver
var server = http.createServer(function (request, response) {
    // HTMLPage.html Read File
    fs.readFile('HTML1.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(50000, function () {
    console.log('Server running at http://127.0.0.1:50000');
});

//Create Socket Server
var io = socketio.listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    //rint Event
    socket.on('rint', function (data) {
        //Output Client Data
        console.log('Client Send Data :', data);
        
        //smart event in Client
        socket.emit('smart', data);
    });
});