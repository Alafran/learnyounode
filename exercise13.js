var http = require("http");
var url = require("url");
var port = process.argv[2];
var result;

var server = http.createServer(function(req,res) {
    var urlObject = url.parse(req.url,true);
    if(urlObject.pathname == '/api/unixtime') {
        result = getUnixTimeStamp(urlObject.query.iso);
    }
    
    if(urlObject.pathname == '/api/parsetime') {
        result = getTimeObj(urlObject.query.iso);
    }
    
    if(result) {
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
    
});

// getUnixTimeStamp returns object with unixtime key and value from getTimeStamp
  function getUnixTimeStamp(startTime) {
    return {
      unixtime: getTimeStamp(startTime)
    };
  }

// getTimeStamp returns parsed Date
  function getTimeStamp(startTime) {
    return Date.parse(startTime);
  }

// getTimeObj takes startTime and returns formatted object
  function getTimeObj(startTime) {
    // Load date parsed by getTimeStamp into date variable
      var date = new Date(getTimeStamp(startTime));

    // Return formatted time object
      return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
  }

server.listen(port);