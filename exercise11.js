var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(req,res) {
    var fileData = fs.createReadStream(fileLocation);
    
    fileData.on("data", function(chunk) {
        res.end(chunk);
    });
});

server.listen(port);