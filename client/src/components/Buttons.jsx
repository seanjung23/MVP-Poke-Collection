import React from "react";

export const NukeButton = ({ handleNukeButtonClick, warnNukeUser }) => {
  return (
    <div className="nuclear">
      <button
      type="button"
      onClick={() => {
        handleNukeButtonClick();
        warnNukeUser();
      }}
    >
      Nuke<br></br>
      Pokédex<br></br>
      &#128512;
    </button>
    </div>
  );
};


export const GlossaryButton = ({ handleGlossaryButtonClick }) => {
  return (
    <div>
      <button
      className="main-button"
      type="button"
      onClick={handleGlossaryButtonClick}
    >
      Go to PokéGlossary
    </button>
    </div>
  );
};

export const FavoritesButton = ({ handleFavoritesButtonClick }) => {
  return (
    <div>
      <button
      className="main-button"
      type="button"
      onClick={handleFavoritesButtonClick}
    >
      Go to Favorites
    </button>
    </div>
  );
};