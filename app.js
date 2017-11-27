console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        console.log('----');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.readNote(argv.title);
} else if(command === 'remove') {
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
