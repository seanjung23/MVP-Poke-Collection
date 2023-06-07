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

export const CollectionButton = ({ handleCollectionButtonClick }) => {
  return (
    <button
      className="main-button"
      type="button"
      onClick={handleCollectionButtonClick}
    >
      Go to PokéCollection
    </button>
  );
};
