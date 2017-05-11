// Sum all given arguments (they're strings by default)

var arguments = process.argv;
var sum = 0;

for (var i = 2, len = arguments.length; i < len; i++) {
    // convert to integer
    sum += Number(arguments[i]);
}

console.log(sum);