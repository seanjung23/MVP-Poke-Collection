import React from "react";

export default function Details({card, clickedPokemon, setClickedPokemon}) {
  return (
    <div className="details-modal">
      <div className="details-modal-content">
        <div className="details-modal-header">
          <h4 className="details-modal-title">
            {card.name} - {card.set.name} Set
          </h4>
        </div>
        <div className="details-modal-body">
          <img className="poke-image" src={card.images.large}></img>
        </div>
        <div className="question-modal-footer">
          footer stuff here
        <button type="button" onClick={() => setClickedPokemon(!clickedPokemon)}>Close</button>
        </div>
      </div>
    </div>
  );
}
