const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const assett = fs.createReadStream(process.argv[3]);

let server = http.createServer(function(request, response) {
    assett.pipe(response);
});
server.listen(port);