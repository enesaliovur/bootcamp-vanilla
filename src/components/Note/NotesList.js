import React from "react";
import { NotesListItem } from "./NotesListItem";

export const NotesList = (props) => {
  return (
    <ul>

      {props.notes.map((note) => (
       <NotesListItem key={note.id} note={note} onDeleteNoteHandler={props.onDeleteNoteHandler}/>
      ))}

    </ul>
  );
};
