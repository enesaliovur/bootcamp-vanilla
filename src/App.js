import React, { useState } from "react";
import { AddNote } from "./components/Note/AddNote";
import { NotesList } from "./components/Note/NotesList";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NoteDetails } from "./components/Note/NoteDetails";
import { DataContext } from "./components/context/data";

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
  const value = {
    noteList,
    addNoteHandler,
    deleteNoteHandler,
  };

  return (
    <DataContext.Provider value={value}>
      <Router>
        <Switch>
          <Route exact path="/notes/:id">
            <NoteDetails />
          </Route>
          <Route exact path="/">
            <AddNote />
            <NotesList />
          </Route>
        </Switch>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
