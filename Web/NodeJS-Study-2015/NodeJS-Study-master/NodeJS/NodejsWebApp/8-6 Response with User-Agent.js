//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set MiddleWare
app.use(function (request, response) {
    //Extract User-Agent Properties
    var agent = request.header('User-Agent');
    
    //classify the WebBrowser
    if (agent.toLowerCase().match(/chrome/)) {
        //Output this page
        response.send('<h1>This Web Browser is Google Chrome! GOOD!</h1>');
    } else {
        //Output this page
        response.send('<h1>This Web Browser is Not Google Chrome Please Use Google Chrome!</h1>');
    }
});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});