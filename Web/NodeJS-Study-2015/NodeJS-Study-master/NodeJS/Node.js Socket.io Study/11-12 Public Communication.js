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

//Create Socket Server and Execute
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // rint Event
    socket.on('rint', function (data) {
        // public Communication
        io.sockets.emit('smart', data);
    });
});