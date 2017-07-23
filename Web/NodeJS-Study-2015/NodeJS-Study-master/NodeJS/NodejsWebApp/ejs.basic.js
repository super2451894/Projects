//Extract Module
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//Create Server
http.createServer(function (request, response) {
    //Read ejsPage.ejs
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
        response.writeHead(200, { 'Context-Type': 'text/html' });
        response.end(ejs.render(data));

    });
}).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});