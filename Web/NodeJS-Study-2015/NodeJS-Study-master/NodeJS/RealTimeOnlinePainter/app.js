//Extract Module
var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

//Create Webserver
var app = express();
app.use(app.router);
app.use(express.static('public'));

//Execute Webserver
var server = http.createServer(app);
server.listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

//Create Socket Server
var io = socketio.listen(server);
io.set('log level', 2);

//Set Route
app.get('/', function (request, response) {
    fs.readFile('lobby.html', function (error, data) {
        response.send(data.toString());
    });
});

app.get('/canvas/:room', function (request, response) {
    fs.readFile('canvas.html', 'utf8', function (error, data) {
        response.send(ejs.render(data, {
            room: request.param('room')
        }));
    });
});

app.get('/room', function (request, response) {
    response.send(io.sockets.manager.rooms);
});

//Connect Socket Server Event
io.sockets.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data);
        socket.set('room', data);
    });
    
    socket.on('draw', function (data) {
        socket.get('room', function (error, room) {
            io.sockets.in(room).emit('line', data);
        });
    });
});