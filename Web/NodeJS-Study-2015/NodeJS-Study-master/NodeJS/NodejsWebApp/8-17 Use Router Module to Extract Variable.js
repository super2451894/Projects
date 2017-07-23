//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.logger());
app.use(app.router);

//Set Router
app.get('/page/:id', function (request, response) {
    //Set Variable
    var name = request.param('id');
    
    //Response
    response.send('<h1>' + name + ' Page</h1>');
});

//Start Server
http.createServer(app).listen(50000, function (){
    console.log('Server Running at http://127.0.0.1:50000');
})