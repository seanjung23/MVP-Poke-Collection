const express = require('express');
require('dotenv').config();

let app = express();

app.use(express.static(__dirname + '/../client/dist'))
app.use(express.json())

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});