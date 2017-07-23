//Create DummyDB
var DummyDB = (function () {
    //set Variable
    var DummyDB = {};
    var storage = {};
    var count = 1;
    
    //Create Method
    DummyDB.get = function (id) {
        if (id) {
            //Process Variable
            id = (typeof id == 'string')?Number(id):id
            
            //Select Data
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
        //Process Variable
        id = (typeof id == 'string')?number(id):id;
        
        //Remove
        for (var i in storage) if (storage[i].id == id) {
            //Remove Data
            storage.splice(i, 1);
            
            //Return, Data Remove Success
            return true;
        }
        
        //Return, Data Remove Fail
        return false;

    };
    
    //Return
    return DummyDB;

})();