// console.log(process.argv);

const net = require('net');
const strftime = require('strftime');
const port = Number(process.argv[2]);

var server = net.createServer(function(socket) {
    socket.write(strftime('%F %R%n'));
    socket.end();
});
server.listen(port);