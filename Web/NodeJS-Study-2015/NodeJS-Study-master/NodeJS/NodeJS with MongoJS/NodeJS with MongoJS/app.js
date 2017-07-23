// Connect DB
var db = require('mongojs')('node', ['products']);

// Extract Data
db.products.find(function (error, data) {
    console.log(data);
});
