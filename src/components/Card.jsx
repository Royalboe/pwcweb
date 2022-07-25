import { render } from "react-dom";

// const Card = () => {
//   return (person = {
//     firstname: "Foo",
//     lastname: "Bar",
//     state: "Lagos",
//     stack: ["Javascript", "React", "HTML", "CSS"],
//     description: "Foo Bar is a software engineer",
//   });
//   render(Card);
// };

// export default Card;

import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>Name: Foo Bar</h2>
      <p>State: Lagos</p>
      <p>Stack: Full Stack</p>
      <p>Description: Foo Bar is a software engineer</p>
    </div>
  );
};

export default Card;
