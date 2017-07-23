// Extract Module
var fs = require('fs');

// Create Server
var server = require('http').createServer();
var io = require('socket.io').listen(server);

// Execute Server
server.listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

// Connect Webserver Event
server.on('request', function (request, response) {
    // Read Chat.html File
    fs.readFile('Chat.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
});

// Connect Socket Server Event
io.sockets.on('connection', function (socket) {
    // join Event
    socket.on('join', function (data) {
        socket.join(data);
        socket.set('room', data);
    });
    
    // message Event
    socket.on('message', function (data) {
        socket.get('room', function (error, room) {
            io.sockets.in(room).emit('message', data);
        });
    });
});