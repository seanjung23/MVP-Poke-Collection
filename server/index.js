const express = require("express");
require("dotenv").config();
const { retrieveCardsAPI } = require("./controller.js");

let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());

app.get("/cards", (req, res) => {
  retrieveCardsAPI(req.query)
    .then((response) => res.send(response.data))
    .catch((err) => console.log("error retrieving data from API", err));
});

app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}`);
});
