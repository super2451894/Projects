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

//Connect Socket Server Event
io.sockets.on('connection', function (socket) {
    //When setname Event Start
    socket.on('setname', function (data) {
        //Save Client Data
        socket.set('name', data);
    });

    //When getname Event Start
    socket.on('getname', function (data) {
        //Extract Data
        socket.get('name', function (error, data) {
            //Send Data
            socket.emit('responsename', data);
        });
    });
});