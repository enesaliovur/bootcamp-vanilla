import React from "react";
import { Button } from "./Button";

export const Form = (props) => {
  return (
   
      <form style={{marginTop: '10px', marginBottom: '10px'}} onSubmit={props.addNoteHandler} action="" >
        <textarea
          placeholder="Not Giriniz"
          value={props.text}
          onChange={props.textChangedHandler}
          style={{ width: "100%", height: "200px" }}
        ></textarea>

        <Button type="submit">Ekle</Button>
      </form>
   
  );
};
