const net = require("net");
const port = process.argv[2];

var server = net.createServer(function(socket) {
   var date = new Date();
   socket.end(formatDate(date));
});

function formatDate(date) {
    var dateToReturn = "";
    dateToReturn += date.getFullYear();
    
    if(date.getMonth() < 10) {
        dateToReturn += "-0" + (date.getMonth() + 1);
    } else {
        dateToReturn += "-" + (date.getMonth() + 1);
    }
    
    if(date.getDate() < 10) {
        dateToReturn += "-0" + date.getDate();
    } else {
        dateToReturn += "-" + date.getDate();
    }
    
    if(date.getHours() < 10) {
        dateToReturn += " 0" + date.getHours();
    } else {
        dateToReturn += " " + date.getHours();
    }
    
    if(date.getMinutes() < 10) {
        dateToReturn += ":0" + date.getMinutes();
    } else {
        dateToReturn += ":" + date.getMinutes();
    }
    dateToReturn += "\n";
    return dateToReturn;
}

server.listen(port);