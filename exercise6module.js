
var fs = require("fs");
var path = require("path");
var filteredListOfFiles = [];

module.exports = function(directory,extension,callback) {
    fs.readdir(directory,function(err,list) {
       if(err) {
           return callback(err);
       } 
       list.forEach(function(file) {
           if(path.extname(file) == "." + extension) {
               filteredListOfFiles.push(file);
           }
       });
       
       return callback(null,filteredListOfFiles);
    });
};