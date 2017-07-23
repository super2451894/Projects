//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set MiddleWare
app.use(function (request, response, next) {
    //Set variable
    var name = request.param('name');
    var region = request.param('region');
    
    //Response
    response.send('<h1>' + name + '-' + region + '</h1>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});