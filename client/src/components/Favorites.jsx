import React, { useState } from "react";
import axios from "axios";
import FavoritesEntry from "./FavoritesEntry.jsx";
import { GlossaryButton2 } from "./Buttons.jsx";

export default function Favorites({
  displayedFavoriteCards,
  handleGlossaryButtonClick,
  setGoFavorites,
  goFavorites
}) {
  return (
    <div>
      <h1 className="main-title" onClick={handleGlossaryButtonClick}>
        Favorites
      </h1>
      <GlossaryButton2
        setGoFavorites={setGoFavorites}
        goFavorites={goFavorites}
      />
      <div className="poke-cards">
        {displayedFavoriteCards.map((card, index) => (
          <FavoritesEntry key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
