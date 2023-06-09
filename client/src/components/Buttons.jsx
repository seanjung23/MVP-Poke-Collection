import React from "react";

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

export const NukeButton = ({ handleNukeButtonClick }) => {
  return (
    <div className="nuclear">
      <button
      type="button"
      onClick={handleNukeButtonClick}
    >
      Nuke<br></br>
      Pokédex<br></br>
      D:&lt;
    </button>
    </div>
  );
};
