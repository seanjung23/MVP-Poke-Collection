import React from "react";

export const GlossaryButton = ({ handleGlossaryButtonClick }) => {
  return (
    <button
      className="main-button"
      type="button"
      onClick={handleGlossaryButtonClick}
    >
      Go to PokéGlossary
    </button>
  );
};

export const NukeButton = ({ handleNukeButtonClick }) => {
  return (
    <div className="nuclear">
      <button
      type="button"
      onClick={handleNukeButtonClick}
    >
      Nuke Pokédex D:&lt;
    </button>
    </div>
  );
};
