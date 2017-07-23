//Extract Module
var http = require('http');
var express = require('express');

//create Server
var app = express();

// Option with request Event
app.use(function (request, response) {
    //Create Data
    var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count: i,
            name:'name - '+i
        })
    }
    
    //Response
    response.send(output);
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});
