const express = require("express");
const cors = require("cors");
const corsSettings = {
  origin: "*",
  methods: "GET",
  optionsSuccessStatus: 200,
};
const app = express();
const importData = require("./quotes.json");
const fs = require("fs");
const showdown = require("showdown");
let port = process.env.PORT || 3000;

app.use(cors(corsSettings));

app.get("/", (req, res) => {
  const str = fs.readFileSync("README.md", "utf8");
  converter = new showdown.Converter();
  const result = converter.makeHtml(str);
  res.send(result);
});

// all quotes
app.get("/api/quotes/", (req, res) => {
  res.send(importData.results);
});

//get quote by id
app.get("/api/quotes/:id", (req, res) => {
  const { id } = req.params;
  const data = importData.results.filter((x) => x.id === parseInt(id));
  res.send(data);
});

//get quotes by author
app.get("/api/quotes/author/:author", (req, res) => {
  const { author } = req.params;
  const data = importData.results.filter((x) => x.author === author);
  res.send(data);
});

// get random quote
app.get("/api/quote", (req, res) => {
  const randomQuote =
    importData.results[Math.round(Math.random() * importData.results.length)];
  console.log(`length ${importData.results.length}`);
  res.send(randomQuote);
});

app.listen(port, () => {
  console.log(`Listening on https://localhost:${port}`);
});
