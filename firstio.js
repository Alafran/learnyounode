function getNewLines(filepath) {
    var fs = require("fs");
    var fileToString = fs.readFileSync(filepath).toString();
    var fileToArray = fileToString.split("\n");
    return fileToArray.length - 1;
}

console.log(getNewLines(process.argv[2]));