// Extract Module
var fs = require('fs');
var http = require('http');
var express = require('express');

// Connect Database
var client = require('mysql').createConnection({
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'location'
});

// Create WebServer
var app = express();
var server = http.createServer(app);

// GET - /tracker
app.get('/tracker', function (request, response) {
    // Offer Tracker.html
    fs.readFile('Tracker.html', function (error, data) {
        response.send(data.toString());
    });
});

// GET - /observer
app.get('/observer', function (request, response) {
    // Offer Observer.html
    fs.readFile('Observer.html', function (error, data) {
        response.send(data.toString());
    });
});

// GET - /ShowData
app.get('/showdata', function (request, response) {
    // Offer Database
    client.query('SELECT * FROM locations WHERE name=?', [request.param('name')], function (error, data) {
        response.send(data);
    });
});

// Execute Webserver
server.listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});

// Execute Socket Server
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // join Event
    socket.on('join', function (data) {
        socket.join(data);
    });
    
    // location Event
    socket.on('location', function (data) {
        // Insert Data
        client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [data.name, data.latitude, data.longitude]);
        
        // receive Event          
        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude,
            date: Date.now()
        });
    });
});