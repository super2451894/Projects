//Extract Module
var http = require('http');
var jade = require('jade');
var fs = require('fs');

//Jade Module can zip the code

//Create Server and Start
http.createServer(function (request, response) {
    //Read jadePage.jade file
    fs.readFile('jadepage.jade', 'utf8', function (error, data) {
        //Use Jade Module
        var fn = jade.compile(data);

        //Output
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(fn());

    });
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});