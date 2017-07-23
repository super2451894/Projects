//Extract Module
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

//Create Webserver
var server = http.createServer(function (request, response) {
    //Read WebChat.html File
    fs.readFile('WebChat.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

//Create Socket Server
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    //Message Event
    socket.on('message', function (data) {
        //Create message Event in Client
        io.sockets.emit('message', data);
    });

});