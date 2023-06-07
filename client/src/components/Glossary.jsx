import React, { useRef, useState } from "react";
import GlossaryEntry from "./GlossaryEntry.jsx";

export default function Glossary({ glossaryData }) {
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
      <h1 className="main-title">PokéGlossary</h1>
      <input
        type="text"
        placeholder="Search Pokèmon..."
        ref={glossaryQuery}
        onChange={searchPokedex}
      ></input>
      <div className="poke-cards">
        {displayedCards.map((card, index) => (
          <GlossaryEntry key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
