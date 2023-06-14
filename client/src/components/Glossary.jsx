import React, { useRef, useState } from "react";
import GlossaryEntry from "./GlossaryEntry.jsx";
import Search from "./Search.jsx";
import Favorites from "./Favorites.jsx";
import { FavoritesButton } from "./Buttons.jsx";

export default function Glossary({
  glossaryData,
  favoritesData,
  handleGlossaryButtonClick
}) {
  const [displayedCards, setDisplayedCards] = useState(glossaryData.slice());
  const [displayedFavoriteCards, setDisplayedFavoriteCards] = useState([]);
  const [goFavorites, setGoFavorites] = useState(false);
  const glossaryQuery = useRef();

  const searchPokedex = (e) => {
    let query = e.target.value.toLowerCase();

    const filteredCards = glossaryData.filter((card) => {
      const cardName = card.name.toLowerCase();
      return cardName.includes(query);
    });

    setDisplayedCards(filteredCards);
  };

  const setFavoriteDisplayedCards = () => {
    const favoriteCardIds = favoritesData.map((card) => card.id);

    const favoriteCards = glossaryData.filter((card) => {
      return favoriteCardIds.includes(card.id);
    });

    setGoFavorites(!goFavorites);
    setDisplayedFavoriteCards(favoriteCards);
  };

  return (
    <div>
      {!goFavorites && (
        <div>
          <h1 className="main-title" onClick={handleGlossaryButtonClick}>
            PokéGlossary
          </h1>
          <FavoritesButton
            setFavoriteDisplayedCards={setFavoriteDisplayedCards}
          />
          <Search glossaryQuery={glossaryQuery} searchPokedex={searchPokedex} />
          <div className="poke-cards">
            {displayedCards.map((card, index) => (
              <GlossaryEntry key={index} card={card} />
            ))}
          </div>
        </div>
      )}
      {goFavorites && (
        <Favorites
          displayedFavoriteCards={displayedFavoriteCards}
          handleGlossaryButtonClick={handleGlossaryButtonClick}
          setGoFavorites={setGoFavorites}
          goFavorites={goFavorites}
        />
      )}
    </div>
  );
}
