var mymodule = require('./06-module.js');

// console.log(process.argv);

var directory = process.argv[2];
var filter = process.argv[3];

mymodule(directory, filter, function(err, files) {
    if (err) throw err;
    files.forEach(function (file) {
        console.log(file);
    });
});