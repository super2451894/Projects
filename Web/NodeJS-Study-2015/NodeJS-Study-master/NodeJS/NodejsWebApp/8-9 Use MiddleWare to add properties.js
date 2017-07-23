//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(function (request, response, next) {
    //Add Data
    request.number = 52;
    response.number = 273;
    next();
});
app.use(function (request, response, next) {
    //Response
    response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});