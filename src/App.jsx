import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { notes } from './allnotes'

// function createNotes(note){
//   return (
//   <Note
//     key= {note.key}
//     title= {note.title}
//     content={note.content}
//   />
//   )
// }

export default function App() {
  // new array which will store note objects
  const [notes, setNotes] = useState([]);

  // the note here is passed from Createarea to use here
  function addNote(note) {
    // adds the current note object to all previous note objects
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  // deleteNote function gets note id from Note comonent
  // it sets the notes array of object by filtering out the notes array where id matches the noteitem index

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* map allthe notes array and create a Note component of each array item */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* {notes.map(createNotes)} */}
      {/* another method to write using arrow function
      {notes.map(note => (
        <Note 
          key= {note.key}
          title= {note.title}
          content={note.content}
        />

      ))} */}

      <Footer />
    </>
  );
}
