// Connect DB
var db = require('mongojs').connect('node', ['products']);

// Extract Data
db.products.find(function (error, data) {
    console.log(data);
});
