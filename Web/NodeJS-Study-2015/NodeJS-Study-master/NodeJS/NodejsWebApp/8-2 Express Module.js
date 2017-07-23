//Extract Module
var http = require('http');
var express = require('express');

//create Server
var app = express();

//Option with request event
app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello Express</h1>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http:/127.0.0.1:50000');
});