console.log('Startin notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('nodes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('nodes-data.json', JSON.stringify(notes));        
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //remove note with title of argument, use filter
    var filteredNotes = notes.filter((element) => element.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    //check whether a note is removed or not
    return notes.length !== filteredNotes.length;
};

module.exports =  {
    addNote,
    getAll,
    readNote,
    removeNote
};
