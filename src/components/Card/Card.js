import React from 'react';
import "./Card.css";

function Card(props) {
  return (
    <div onClick={props.handleShuffle} className="card">
      <img alt={props.image} src={props.image} />
    </div>
  );
}

export default Card;


