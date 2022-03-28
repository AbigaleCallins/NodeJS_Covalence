const path = require('path');
const fs = require('fs');

let chirps = [

    {'id': "chirp1",
    'name': "Jon",
    'text': "chirp 1"},

    {'id': "chirp2",
    'name': "Abbie",
    'text': "chirp 2"},

    {'id': "chirp3",
    'name': "Janet",
    'text': "chirp 3"},

    {'id': "chirp4",
    'name': "Calista",
    'text': "chirp 4"},

    {'id': "chirp5",
    'name': "Leah",
    'text': "chirp 5"}
];

fs.writeFileSync("chirps.json", JSON.stringify(chirps), (err) => {
    if (err) console.log(err);
});

fs.readFile("chirps.json", (err, data) => {
    if (err) console.log(err);
    console.log(data.toString());
});