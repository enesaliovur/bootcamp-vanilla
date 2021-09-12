import React, { useState } from "react";
import { AddNote } from "./components/Note/AddNote";
import { NotesList } from "./components/Note/NotesList";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NoteDetails } from "./components/Note/NoteDetails";

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
    <Router>
      <Switch>
        <Route
          path="/notes/:id"
          render={(props) => <NoteDetails notes={noteList} {...props} />}
        />
        <Route exact path="/">
          <AddNote onAddNoteHandler={addNoteHandler} />
          <NotesList notes={noteList} onDeleteNoteHandler={deleteNoteHandler} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
