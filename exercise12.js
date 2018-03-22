var http = require("http");
var port = process.argv[2];

var server = http.createServer(function(req,res) {
    var method = req.method;
    if(method == "POST") {
        req.on("data", function(chunk) {
           res.write(chunk.toString().toUpperCase()); 
        });
        
        req.on('end',function() {
           res.end(); 
        });
    }
    
});

server.listen(port);