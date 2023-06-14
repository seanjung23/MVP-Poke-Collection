import React, { useEffect, useState } from "react";
import axios from "axios";
import { NukeButton, GlossaryButton } from "./Buttons.jsx";
import Nuke from "./Nuke.jsx";
import Glossary from "./Glossary.jsx";

export default function App() {
  const [glossaryData, setGlossaryData] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);
  const [clickButton, setClickButton] = useState(false);
  const [goNuke, setGoNuke] = useState(false);
  const [goGlossary, setGoGlossary] = useState(false);

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

    axios
      .get("/favorite")
      .then((cardsData) => {
        console.log("this is favorites data", cardsData);
        setFavoritesData(cardsData.data);
      })
      .catch((err) =>
        console.error(
          "error retrieving fasfsaasfascard information from server!",
          err
        )
      );
  }, []);

  const handleNukeButtonClick = () => {
    setClickButton(!clickButton);
    setGoNuke(!goNuke);
  };

  const handleGlossaryButtonClick = () => {
    setClickButton(!clickButton);
    setGoGlossary(!goGlossary);
  };

  const warnNukeUser = () => {
    alert("Are you sure you want to proceed? There is no turning back.");
    alert("Too late, have a wonderful day! 🗿");
  };

  return (
    <div>
      {!clickButton && (
        <div>
          <h1 className="main-title">Pokédex</h1>
          <NukeButton
            handleNukeButtonClick={handleNukeButtonClick}
            warnNukeUser={warnNukeUser}
          />
          <GlossaryButton
            handleGlossaryButtonClick={handleGlossaryButtonClick}
          />
        </div>
      )}
      {goNuke && (
        <div>
          <Nuke />
        </div>
      )}
      {goGlossary && (
        <div>
          <Glossary
            glossaryData={glossaryData}
            favoritesData={favoritesData}
            handleGlossaryButtonClick={handleGlossaryButtonClick}
          />
        </div>
      )}
    </div>
  );
}
