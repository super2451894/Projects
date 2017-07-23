//Connect process object to exit event
process.on('exit', function () {
    console.log('안녕히 가거라 ^_^');
});

//Connect process object to uncaughtException event
process.on('uncaughtException', function (error) {
    console.log('예외가 발생하였습니다...');
});

//Make 3 Exception per 2 seconds
var count = 0;
var id = setInterval(function () {
    //increase times
    count++;
    
    // When reach 3times stop timer
    if (count == 3) { clearInterval(id); }
    
    //Make Exception forcibly
    error.error.error();
}, 2000);

//COMMIT TEST
