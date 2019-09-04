import React from 'react';
import "./style.css";

function GameCards(props) {

  var divStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: `cover`
  }

  return (
    <div className="figure rounded text-center" id={props.id} style={divStyle} onClick={() => props.handleGuess(props.id)} data-hasbeenclicked={props.hasBeenClicked}>
        <img className="figure-img img-fluid rounded m-auto d-block" alt={props.name} src={props.image} />
        <figcaption className="figure-caption"><strong>Name:</strong> {props.name}</figcaption>
    </div>
  );
}

export default GameCards;
