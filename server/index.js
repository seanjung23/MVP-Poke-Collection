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

// app.get("/favorites", (req, res) => {
//   getAll()
//     .then((response) => {
//       let responseObj = [];
//       // { q: 'id:base1', page: '1', orderBy: 'set.releaseDate' }
//       response.forEach((data) => {
//         let params = {
//           q: data.id,
//           page: '1',
//           orderBy: "set.releaseDate"
//         };

//         retrieveCardsAPI(params)
//         .then((apiResponse) => console.log(apiResponse))
//         .catch((err) => console.error(err));
//       })
//     })
//     .catch((err) => console.error("error retrieving data from controller", err));
// })

app.post("/favorite", (req, res) => {
  save(req.body)
    .then((response) => res.send(response))
    .catch((err) => console.error(err))
})

app.listen(process.env.PORT, function () {
  console.log(`listening on port ${process.env.PORT}`);
});
