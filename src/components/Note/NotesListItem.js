import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../context/data";
import { Button } from "../UI/Button";

export const NotesListItem = (props) => {
  const value = useContext(DataContext);
  return (
    <li style={{ listStyleType: "none" }} key={props.id}>
      {props.note.text}
      <Button onClick={() => value.deleteNoteHandler(props.note.id)}>
        sil
      </Button>

      <Link to={`/notes/${props.note.id}`}>Detay Göster</Link>

      <hr></hr>
    </li>
  );
};
