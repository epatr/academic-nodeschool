/**
 * Write an HTTP server that receives only POST requests and converts
 * incoming POST body characters to upper case and returns it to the client.
 * 
 * Your server should listen on the port provided by the first argument to 
 * your program.
 * 
 * TODO include http, getargv2, what is through2-map
 */

const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

let server = http.createServer(function(request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(response);
    response.end();
});
server.listen(port);