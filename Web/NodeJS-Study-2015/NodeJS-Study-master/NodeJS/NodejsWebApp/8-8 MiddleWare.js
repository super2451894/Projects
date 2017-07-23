//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware(1)
app.use(function (request, response, next) {
    console.log('first MiddleWare');
    next();
});

//Set Middleware(2)
app.use(function (request, response, next) {
    console.log('second MiddleWare');
    next();
});

//Set Middleware(3)
app.use(function (request, response, next) {
    console.log('third MiddleWare');
    

    //Response
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Express Basic</h1>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});