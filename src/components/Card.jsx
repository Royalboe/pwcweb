import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.state}</p>
      <p>{props.stack}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
