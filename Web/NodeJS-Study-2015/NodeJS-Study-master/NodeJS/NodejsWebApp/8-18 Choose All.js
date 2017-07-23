//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(app.router);

//Set Router
app.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
});

app.get('*', function (request, response) {
    response.send(404, '<h1>ERROR - PAGE NOT FOUND</h1>');
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
})