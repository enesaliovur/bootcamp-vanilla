import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const NoteDetails = (props) => {
  const [data, setData] = useState();
  let { id } = useParams();
  useEffect(() => {
    setData(props.notes.find((note) => note.id === id));
  }, []);
  if (!data) return <div>Not Bulunamadı</div>;
  return (
    <div>
      <h2>{data.id} ID'ye sahip notun detayları</h2>
      <p>{data.text}</p>
      <Link to={`/`} >Anasayfa</Link>
    </div>
  );
};
