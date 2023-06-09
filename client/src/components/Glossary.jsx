import React, { useRef, useState } from "react";
import GlossaryEntry from "./GlossaryEntry.jsx";
import SearchIcon from "./../icons/SearchIcon.jsx";

export default function Glossary({ glossaryData, handleGlossaryButtonClick }) {
  const [displayedCards, setDisplayedCards] = useState(glossaryData.slice());
  const glossaryQuery = useRef();

  const searchPokedex = (e) => {
    let query = e.target.value.toLowerCase();

    const filteredCards = glossaryData.filter((card) => {
      const cardName = card.name.toLowerCase();
      return cardName.includes(query);
    });

    setDisplayedCards(filteredCards);
  };

  return (
    <div>
      <h1 className="main-title-glossary" onClick={handleGlossaryButtonClick}>
        PokéGlossary
      </h1>
      <div className="search-bar">
        <label>
          <input
            type="text"
            placeholder="Search Pokèmon..."
            ref={glossaryQuery}
            onChange={searchPokedex}
          ></input>
        </label>
        <SearchIcon />
      </div>
      <div className="poke-cards">
        {displayedCards.map((card, index) => (
          <GlossaryEntry key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
