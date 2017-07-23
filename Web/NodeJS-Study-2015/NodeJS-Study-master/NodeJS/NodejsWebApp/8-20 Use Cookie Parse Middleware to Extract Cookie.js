//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.cookieParser());
app.use(app.router);

//Set Router
app.get('/getCookie', function (request, response) {
    //Response
    response.send(request.cookies);
});

app.get('/setCookie', function (request, response) {
    //Create Cookie
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });
    
    //Response
    response.redirect('/getCookie');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});