//console.log(process.argv);

const http = require('http');
const url = process.argv[2];

http.get(url, function(response) {
    let stream = [];
    response.setEncoding('utf8');
    response.on('data', function(data) {
        stream.push(data);
    });
    response.on('end', function(end) {
        // Line 1: integer representing number of characters received from the server
        console.log(stream.join('').length);
        // Line 2: the complete string of characters
        console.log(stream.join(''));
    });
});
