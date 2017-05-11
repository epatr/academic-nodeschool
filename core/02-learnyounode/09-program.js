const http = require('http');
const output = [ 
    {
        "url": process.argv[2],
        "response": ""
    },
    {
        "url": process.argv[3],
        "response": ""
    },
    {
        "url": process.argv[4],
        "response": ""
    }
];

let responses = 0;

output.forEach(function(currentValue, index) {

    http.get(currentValue.url, function(response) {
        let stream = [];
        response.setEncoding('utf8');
        response.on('data', function(data) {
            stream.push(data);
        });
        response.on('end', function(end) {
            output[index].response = (stream.join(''));
            responses++;
            if (responses === 3) {
                output.forEach(function(data) {
                    console.log(data.response);
                });
            }
        });
    });


});