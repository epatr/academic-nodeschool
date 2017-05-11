/**
 * Read a directory and filter it to only show the supplied
 * extension types
 */

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var filter = "." + process.argv[3]; // supplied argument won't have the preceding .

fs.readdir(directory, function (err, files) {
    if (err) throw (err);

    // for each item in the 'files' array
    for (var i = 0, len = files.length; i < len; i++ ){
        // check to see if the filename's extension matches the filter
        if (path.extname(files[i]) == filter) {
            console.log(files[i]);
        }
    }
});