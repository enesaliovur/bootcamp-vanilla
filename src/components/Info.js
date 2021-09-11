import React from "react";

export const Info = (props) => {
  return (
    <tr>
      <td style={{ border: "1px solid black" }}>{props.exchangeType}</td>
      <td style={{ border: "1px solid black" }}>{props.buy}</td>
      <td style={{ border: "1px solid black" }}>{props.sell}</td>
      <td style={{ border: "1px solid black" }}>{props.diff}</td>
    </tr>
  );
};
