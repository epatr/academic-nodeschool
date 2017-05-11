var http = require('http');

//console.log(process.argv);

var url = process.argv[2];

var output = http.get(url, function(response) {
    response.setEncoding('utf8');
    
    response.on("data", function(data) {
        console.log(data);
    });

    response.on("error", function(error) {
        console.error(error);
    });
});
