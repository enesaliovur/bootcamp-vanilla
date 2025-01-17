import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/data";
import { NotesListItem } from "./NotesListItem";

export const NotesList = () => {

  const value = useContext(DataContext)

  return (
    <ul>
      {value.noteList.map((note) => (
       <NotesListItem key={note.id} note={note} />
      ))}

    </ul>
  );
};
