var pets = [
    'cat',
    'dog',
    'rat'
];

// make each pet type plural
for (var i = 0, len = pets.length; i < len; i++) {
    pets[i] = pets[i] + 's';
}

console.log(pets);