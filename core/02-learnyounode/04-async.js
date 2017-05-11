/**
 *  write a program that reads a file and prints the
 *  number of new lines it contains
 */ 

var fs = require('fs');

// rules of learnyounode say the path to the file is the first argument
var filename = process.argv[2];

// readFile is file[, options], callback (err, data)
var contents = fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw (err);
    var str = data.toString();
    var lines = str.split('\n').length - 1;
    console.log(lines);    
});