var fs = require("fs");
var filepath = process.argv[2];
var extensionToFilter = process.argv[3];
var listOfFiles = undefined;
var filteredListOfFiles = [];

function printFiles() {
    fs.readdir(filepath,function(err, list) {
        if(err) {
            console.log(err);
        }
        listOfFiles = list;
        filterFiles(listOfFiles);
        for(var i = 0; i < filteredListOfFiles.length; i++) {
            console.log(filteredListOfFiles[i]);
        }
    });
}

function filterFiles(files) {
    files.forEach(function(file) {
        var extension = file.split(".");
        if(extension[1] == extensionToFilter) {
            filteredListOfFiles.push(file);
        }
    });
}

printFiles();