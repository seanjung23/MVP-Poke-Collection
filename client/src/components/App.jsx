import React, { useEffect, useState } from "react";
import axios from "axios";
import Glossary from "./Glossary.jsx";
import Nuke from "./Nuke.jsx";
import { GlossaryButton, NukeButton } from "./Buttons.jsx";

export default function App() {
  const [glossaryData, setGlossaryData] = useState([]);
  const [clickButton, setClickButton] = useState(true);
  const [goGlossary, setGoGlossary] = useState(false);
  const [goNuke, setGoNuke] = useState(false);

  useEffect(() => {
    let params = {
      q: "id:base1",
      page: 1,
      orderBy: "set.releaseDate",
    };

    axios
      .get("/cards", { params })
      .then((cardsData) => {
        console.log(cardsData);
        setGlossaryData(cardsData.data);
      })
      .catch((err) =>
        console.error("error retrieving card information from server!", err)
      );
  }, []);

  const handleGlossaryButtonClick = () => {
    setClickButton(!clickButton);
    setGoGlossary(!goGlossary);
  };

  const handleNukeButtonClick = () => {
    setClickButton(!clickButton);
    setGoNuke(!goNuke);
  };

  return (
    <div>
      {clickButton && (
        <div>
          <h1 className="main-title">Pokédex</h1>
          <GlossaryButton
            handleGlossaryButtonClick={handleGlossaryButtonClick}
          />
          <NukeButton
            handleNukeButtonClick={handleNukeButtonClick}
          />
        </div>
      )}
      {goGlossary && (
        <div>
          <Glossary glossaryData={glossaryData} />
        </div>
      )}
      {goNuke && (
        <div>
          <Nuke />
        </div>
      )}
    </div>
  );
}
