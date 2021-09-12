import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button";

export const NotesListItem = (props) => {
  return (
    <li
      style={{ listStyleType: "none" }}
      key={props.note.id}
      
    >
      {props.note.text}
      <Button onClick={() => props.onDeleteNoteHandler(props.note.id)}>sil</Button>
      <Link to={`/notes/${props.note.id}`} >Detay Göster</Link>

      <hr></hr>
    </li>
  );
};
