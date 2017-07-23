//Extract Module
var fs = require('fs');

//Read file
try{
var data=fs.readFileSync('textfile.txt','utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

//Write File
try{
fs.writeFileSync('textfile.txt','Hello World..!','utf8');
console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}