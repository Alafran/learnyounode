const http = require("http");

var numChars = 0;
var dataString = "";

http.get(process.argv[2], function(response) {
    response.setEncoding("utf8");
    
    response.on("data", function(chunk) {
       numChars += chunk.length;
       dataString += chunk;
    });
    
    response.on("end", function() {
       console.log(numChars);
       console.log(dataString);
    });
}); 
    