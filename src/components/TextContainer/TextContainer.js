import React from "react";

import './TextContainer.css'

const TextContainer = ({ users }) => (
  <div className="textContainer">
  <h1>Users currently in room:</h1>
    {
        users
        ? (
        users.map(({name}) => (
      <div key={name} className="activeItem">
        {name}
      </div>
    ))): null
}
  </div>
);

export default TextContainer;
