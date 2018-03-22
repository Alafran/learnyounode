    var fs = require("fs");
    var fileToString = undefined;

function fileToArray(filepath) {

    fs.readFile(filepath,function(err,data) {
        fileToString = data.toString();
        var fileToArray = fileToString.split("\n");
        console.log(fileToArray.length - 1);
    });
}
 fileToArray(process.argv[2]);