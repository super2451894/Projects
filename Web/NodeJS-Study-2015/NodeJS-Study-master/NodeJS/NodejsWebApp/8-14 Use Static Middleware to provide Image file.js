//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.use(function (request, response) {
    //Response
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<img src="/judy.gif" width=100% />');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});