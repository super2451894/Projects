// Extract Module
var fs = require('fs');
var http = require('http');
var express = require('express');

// Create Dummy Database
var DummyDB = (function () {
    // Set Variable
    var DummyDB = {};
    var storage = [];
    var count = 1;
    
    // Create Method
    DummyDB.get = function (id) {
        if (id) {
            // Process Data
            id = (typeof id == 'string') ? Number(id) : id;
            
            // Select Data
            for (var i in storage) if (storage[i].id == id) {
                return storage[i];
            }
        } else {
            return storage;
        }
    };
    
    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };
    
    DummyDB.remove = function (id) {
        // Process Data
        id = (typeof id == 'string') ? Number(id) : id;
        
        // Remove
        for (var i in storage) if (storage[i].id == id) {
            // Data Remove
            storage.splice(i, 1);
            
            // Return, Data Remove Success
            return true;
        }
        
        // Return, Data Remove Fail
        return false;
    };
    
    // Return
    return DummyDB;
})();

// Create Server
var app = express();

// Set Middleware
app.use(express.bodyParser());
app.use(app.router);

// Set Router
app.get('/user', function (request, response) {
    response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response) {
    response.send(DummyDB.get(request.param('id')));
});

app.post('/user', function (request, response) {
    // Set Variable
    var name = request.param('name');
    var region = request.param('region');
    
    // Check Effectiveness
    if (name && region) {
        response.send(DummyDB.insert({
            name: name,
            region: region
        }));
    } else {
        throw new Error('error');
    }
});

app.put('/user/:id', function (request, response) {
    //Set Variable
    var id = request.param('id');
    var name = request.param('name');
    var region = request.param('region');

    //Modify Database
    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    //Response
    response.send(item);
});
app.del('/user/:id', function (request, response) {
    response.send(DummyDB.remove(request.param('id')));
});

// Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server running at http://127.0.0.1:50000');
});
