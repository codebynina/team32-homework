const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: Invalid ID.");
    return;
  }

  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.log("Error: Note not found.");
  return null;
}

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(getNote(1)); 

logOutNotesFormatted();

