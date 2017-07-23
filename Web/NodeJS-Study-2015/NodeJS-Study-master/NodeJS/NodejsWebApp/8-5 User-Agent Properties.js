//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set MiddleWare
app.use(function (request, response) {
    //Extract User-Agent Properties
    var agent = request.header('User-Agent');
    
    console.log(request.headers);
    console.log(agent);
    
    //Response
    response.send(200);
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});