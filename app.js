const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note Created");
    notes.logNote(note);
  }
}
else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
  var noteRead = notes.getNote(argv.title);
  if (noteRead) {
    console.log("Note Found");
    notes.logNote(noteRead)
  }
  else {
    console.log("Note not Found");
  }
}
else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Noted was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log("Command not recognized");
}
