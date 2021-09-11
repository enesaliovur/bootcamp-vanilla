import React from "react";
import { Button } from "./Button";

export const ErrorModal = (props) => {
  return (
    <>
      <div onClick={props.onConfirm} />
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.onConfirm}>Tamam</Button>
      </footer>
    </>
  );
};
