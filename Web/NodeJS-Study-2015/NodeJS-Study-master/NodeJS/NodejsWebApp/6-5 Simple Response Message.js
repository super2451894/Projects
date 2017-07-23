// Create Webserver and Start
require('http').createServer(function (request, response){
    //Response
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(50000,function() {
    console.log('Server Running at http://127.0.0.1:50000');
});