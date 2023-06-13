import React, { useState } from "react";
import axios from "axios";
import FavoritesEntry from "./FavoritesEntry.jsx";

export default function Favorites({ handleFavoritesButtonClick }) {

  return (
    <div>
      <h1 className="main-title" onClick={handleFavoritesButtonClick}>
        Favorites
      </h1>
      <div className="poke-cards">
        {/* {displayedCards.map((card, index) => (
          <FavoritesEntry key={index} card={card} />
        ))} */}
      </div>
    </div>
  );
}