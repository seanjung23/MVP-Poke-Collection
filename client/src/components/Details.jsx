import React, { useState } from "react";
import axios from "axios";
import HeartIcon from "./../icons/HeartIcon.jsx";

export default function Details({ card, clickedPokemon, setClickedPokemon }) {
  const [focused, setFocused] = useState(false);

  const color = {
    false: "none",
    true: "red"
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  const handleFavoriteClick = () => {
    if (!focused) {
      axios
        .post("/favorite", {id: card.id})
        .then((response) => console.log("Successfully added to favorites!", response))
        .catch((err) => console.error(err));
    }

    setFocused(!focused);
  };

  return (
    <div className="details-modal">
      <div className="details-modal-content" onClick={handleContentClick}>
        <div className="details-modal-header">
          <h4 className="details-modal-title">
            {card.name} - {card.set.name} Set
            <HeartIcon focused={focused} setFocused={setFocused} color={color} handleFavoriteClick={handleFavoriteClick}/>
          </h4>
        </div>
        <div className="details-modal-body">
          <img className="poke-image" src={card.images.large}></img>
          <div>
            <h4 className="modal-body-main-heading">Product Details</h4>
            <h4 className="modal-body-heading">Card Number | Rarity: </h4>
            <p>
              {card.number} / {card.set.total} | {card.rarity || "Common"}
            </p>

            {/* write logic for card.hp and card.subtypes. None of them(energy or trainers) have card.types */}
            {(card.supertype === "Pokémon") && (
              <div>
                <h4 className="modal-body-heading">Card Type | HP | Stage: </h4>
                <p>
                  {card.types} | {card.hp} | {card.subtypes}
                </p>
              </div>
            )}

            {(card.name === "Clefairy Doll") && (
              <div>
                <h4 className="modal-body-heading">HP: </h4>
                <p>
                  {card.hp}
                </p>
              </div>
            )}

            {(card.supertype === "Trainer") && (
              <div>
                <h4 className="modal-body-heading">Card Type: </h4>
                <p>
                  {card.supertype}
                </p>
              </div>
            )}

            {(card.supertype === "Energy") && (
              <div>
                <h4 className="modal-body-heading">Card Type: </h4>
                <p>
                  {card.subtypes} {card.supertype}
                </p>
              </div>
            )}

            {card.attacks && (
              <div>
                <h4 className="modal-body-heading">[nrg] | Attack 1 | [dmg]: </h4>
                <p>
                  [{card.attacks[0].convertedEnergyCost}] {card.attacks[0].name}{" "}
                  ({card.attacks[0].damage || 0})
                </p>
              </div>
            )}

            {card.attacks && card.attacks[1] && (
              <div>
                <h4 className="modal-body-heading">[nrg] | Attack 2 | [dmg]: </h4>
                <p>
                  [{card.attacks[1].convertedEnergyCost}] {card.attacks[1].name}{" "}
                  ({card.attacks[1].damage || 0})
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="question-modal-footer">
          <button
            className="close-button"
            type="button"
            onClick={() => setClickedPokemon(!clickedPokemon)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
