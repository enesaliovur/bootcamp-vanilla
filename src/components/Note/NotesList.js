import React from "react";
import { NotesListItem } from "./NotesListItem";

export const NotesList = (props) => {
  return (
    <ul>

      {props.notes.map((note) => (
       <NotesListItem note={note} onDeleteNoteHandler={props.onDeleteNoteHandler}/>
      ))}
    </ul>
  );
};
