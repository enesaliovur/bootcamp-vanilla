import React, { useState } from "react";
import { AddNote } from "./components/Note/AddNote";
import { NotesList } from "./components/Note/NotesList";
import { toast } from "react-toastify";

const App = () => {
  const [noteList, setNotesList] = useState([]);
  const addNoteHandler = (text, id) => {
    setNotesList((prevNotesList) => {
      return [...prevNotesList, { text, id }];
    });
    toast.success("Not Eklendi");
  };

  const deleteNoteHandler = (id) => {
    setNotesList((prevNoteList) => {
      return prevNoteList.filter((note) => note.id !== id);
    });
  };
  return (
    <div>
      <AddNote onAddNoteHandler={addNoteHandler} />
      <NotesList notes={noteList} onDeleteNoteHandler={deleteNoteHandler} />
    </div>
  );
};

export default App;
