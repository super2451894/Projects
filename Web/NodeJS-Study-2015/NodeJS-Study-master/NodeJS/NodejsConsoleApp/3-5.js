//process.argv
process.argv.forEach(function (item, index){
    //output
    console.log(index + ' : ' + typeof (item) + ' : ', item);

    // if inside the variable there is --exit
    if (item == '--exit') {
        //get thie variable
        var exitTime = Number(process.argv[index + 1]);

        //after few times, exit the program
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});