import React, { useContext, useState } from "react";
import { ErrorModal } from "../UI/ErrorModal";
import { v4 as uuidv4 } from "uuid";
import { Form } from "../UI/Form";
import { DataContext } from "../context/data";


export const AddNote = (props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const value = useContext(DataContext)
  const addNoteHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setError({
        title: "Geçersiz Not",
        message: "Lütfen Not Alanını Boş Bırakmayınız",
      });
      return;
    }
    value.addNoteHandler(text, uuidv4());
    setText("");
  };

  const textChangedHandler = (e) => {
    setText(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Form
        textChangedHandler={textChangedHandler}
        text={text}
        addNoteHandler={addNoteHandler}
      />
    </div>
  );
};
