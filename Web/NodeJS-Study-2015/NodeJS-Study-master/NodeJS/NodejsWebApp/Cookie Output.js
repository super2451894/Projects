// Module Extract
var http = require('http');

// Create Server and start
http.createServer(function (request, response){
    //Set variable
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // Write Cookie
    response.writeHead(200, {
        'Context-Type': 'text/html',
        'Set-Cookie': ['breakfast=toast;Expires = ' + date.toUTCString(), 'dinner=chicken']
    });

    //Output Cookie
    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(50000, function (){
    console.log('Server Running at http://127.0.0.1:50000');
})