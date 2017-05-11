var fs = require('fs');
var path = require('path');

module.exports = function (directory, filter, callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        } else {
            // We've read the directory, and the data (var files) is okay
            // DEBUG return callback(null, files);

            var output = files.filter(function(data) {
                if (path.extname(data) == "." + filter) {
                    return true;
                }
            });
            return callback(null, output); 
        }
    });
};