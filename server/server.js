const path = require('path');
const fs = require('fs');

let chirps = [
    {name: "Jon",
    text: "chirp 1"},

    {name: "Abbie",
    text: "chirp 2"},

    {name: "Janet",
    text: "chirp 3"},

    {name: "Calista",
    text: "chirp 4"},

    {name: "Leah",
    text: "chirp 5"}
];

let chirpPath = fs.readFile(__dirname, '../chirps.json'); 

fs.writeFile(pathway, {endcoding: " UTF-8"}, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})