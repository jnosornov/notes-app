console.log('Startin notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('nodes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('nodes-data.json', JSON.stringify(notes));        
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports =  {
    addNote,
    getAll,
    readNote,
    removeNote
};
