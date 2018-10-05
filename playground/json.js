// var obj = {
//   name: "Melverton"
// };
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": "22"}';
// console.log(personString);
// var person = JSON.parse(personString)
// console.log(person);
// console.log(type);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);
