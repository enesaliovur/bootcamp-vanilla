import React from "react";
import { Button } from "../UI/Button";

export const NotesListItem = (props) => {
  return (
    <li
      style={{ listStyleType: "none" }}
      key={props.note.id}
      onClick={() => props.onDeleteNoteHandler(props.note.id)}
    >
      {props.note.text} Silmek için üstüne tıklayınız
      <hr></hr>
    </li>
  );
};
