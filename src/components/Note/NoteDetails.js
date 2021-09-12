import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { DataContext } from "../context/data";

export const NoteDetails = () => {
  const value = useContext(DataContext);
  const [data, setData] = useState();
  let { id } = useParams();

  useEffect(() => {
    setData(value.noteList.find((note) => note.id === id));
  }, []);
  if (!data) return <div>Not Bulunamadı</div>;
  return (
    <div>
      <h2>{data.id} ID'ye sahip notun detayları</h2>
      <hr></hr>
      <p>{data.text}</p>
      <hr></hr>
      <Link to={`/`}>Anasayfa</Link>
    </div>
  );
};
