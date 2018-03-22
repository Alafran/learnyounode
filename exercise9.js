const http = require("http");

var firstURL = process.argv[2];
var secondURL = process.argv[3];
var thirdURL = process.argv[4];

var firstURLData = "";
var secondURLData = "";
var thirdURLData = "";

var firstURLDone = false;
var secondURLDone = false;
var thirdURLDone = false;

http.get(firstURL,function(res) {
    res.setEncoding('utf8');
    
    res.on('data', function(chunk) {
       firstURLData += chunk; 
    });
    
    res.on('end', function() {
       firstURLDone = true;
       printData();
    });
    
});

http.get(secondURL,function(res) {
    res.setEncoding('utf8');
    
    res.on('data', function(chunk) {
       secondURLData += chunk; 
    });
    
    res.on('end', function() {
       secondURLDone = true; 
       printData();
    });
    
});

http.get(thirdURL,function(res) {
    res.setEncoding('utf8');
    
    res.on('data', function(chunk) {
       thirdURLData += chunk; 
    });
    
    res.on('end', function() {
       thirdURLDone = true; 
       printData();
    });
    
    
});

function printData() {
    if(firstURLDone && secondURLDone && thirdURLDone) {
        console.log(firstURLData);
        console.log(secondURLData);
        console.log(thirdURLData);
    }
}