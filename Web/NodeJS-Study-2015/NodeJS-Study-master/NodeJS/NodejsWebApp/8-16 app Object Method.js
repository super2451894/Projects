//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.logger());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

//Set Router
app.get('/a', function (request, response) {
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function (request, response) {
    response.send('<a href="/a">Go to A</a>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});