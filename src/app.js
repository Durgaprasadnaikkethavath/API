const express = require("express");
const app = express();
const port = 3200;

const cors = require("cors");
app.use(cors());

app.use(express.json());

// connection of js
require("./dbConfig/conn");
const mensRanking = require("./model/cricketInfo");

///////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("<h1>Welcome to API Create Process</h1>");
});

app.get("/mensCricket", async (req, res) => {
  try {
    const meansData = await mensRanking.find({});
    res.status(201).json(meansData);
  } catch (e) {
    console.log(e);
  }
});
// post data in postman

app.post("/means", async (req, res) => {
  try {
    const newRecords = await mensRanking.create(req.body);
    res.status(200).json({ newRecords });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, (req, res) => {
  console.log(`Server listening at ${port}`);
});
