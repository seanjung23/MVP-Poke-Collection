const express = require("express");
require("dotenv").config();
const { retrieveCardsAPI, getAll, save, remove } = require("./controller.js");

let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());

app.get("/cards", (req, res) => {
  retrieveCardsAPI(req.query)
    .then((response) => res.send(response.data.data))
    .catch((err) => console.log("error retrieving data from controller", err));
});

app.get("/favorite", (req, res) => {
  getAll()
    .then((response) => res.send(response))
    .catch((err) => console.error("error retrieving data from controller", err));
})

app.post("/favorite", (req, res) => {
  save(req.body)
    .then((response) => res.send(response))
    .catch((err) => console.error(err))
})

app.delete("/favorite", (req, res) => {
  // console.log(req.body);
  remove(req.body)
    .then((response) => res.send(response))
    .catch((err) => console.error(err))
})

app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}`);
});
