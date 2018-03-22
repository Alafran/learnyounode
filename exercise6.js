var mymodule = require("./exercise6module.js");
var path = require("path");

var callback = function(err, list) {
    if(err) {
        console.log(err);
    }
    
    list.forEach(function(file) {
       console.log(file); 
    });
}

mymodule(process.argv[2],process.argv[3],callback);