var fs = require('fs');

// filename is first argument
var contents = fs.readFileSync(process.argv[2]);

// convert buffer object to string
var str = contents.toString();

// split the string by line breaks
var lines = str.split('\n').length - 1;

console.log(lines);