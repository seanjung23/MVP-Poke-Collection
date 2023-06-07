import React, { useEffect, useState } from "react";
import axios from "axios";
import Glossary from "./Glossary.jsx";
import Collection from "./Collection.jsx";
import { GlossaryButton, CollectionButton } from "./Buttons.jsx";

export default function App() {
  const [glossaryData, setGlossaryData] = useState([]);
  const [clickButton, setClickButton] = useState(true);
  const [goGlossary, setGoGlossary] = useState(false);
  const [goCollection, setGoCollection] = useState(false);

  useEffect(() => {
    let params = {
      q: "id:base1",
      page: 1,
      orderBy: "set.releaseDate",
    };

    axios
      .get("/cards", { params })
      .then((cardsData) => setGlossaryData(cardsData.data))
      .catch((err) =>
        console.error("error retrieving card information from server!", err)
      );
  }, []);

  const handleGlossaryButtonClick = () => {
    setClickButton(!clickButton);
    setGoGlossary(!goGlossary);
  };

  const handleCollectionButtonClick = () => {
    setClickButton(!clickButton);
    setGoCollection(!goCollection);
  };

  return (
    <div>
      {clickButton && (
        <div>
          <h1 className="main-title">Pokédex</h1>
          <GlossaryButton
            handleGlossaryButtonClick={handleGlossaryButtonClick}
          />
          <CollectionButton
            handleCollectionButtonClick={handleCollectionButtonClick}
          />
        </div>
      )}
      {goGlossary && (
        <div>
          <Glossary glossaryData={glossaryData} />
        </div>
      )}
      {goCollection && (
        <div>
          <Collection />
        </div>
      )}
    </div>
  );
}
