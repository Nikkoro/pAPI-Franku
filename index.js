const express = require("express");
const cors = require("cors");
const corsSettings = {
    origin: "*",
    methods: "GET",
    optionsSuccessStatus: 200,
};
const app = express();
const importData = require("./quotes.json");

let port = process.env.PORT || 3000;

app.get("/", cors(corsSettings), (req, res) => {
    res.send("pAPI Franku");
});

app.get("/quotes", cors(corsSettings), (req, res) => {
    res.send(importData);
});

app.get("/quote", cors(corsSettings), (req, res) => {
    const randomQuote = importData[Math.round(Math.random() * 50)];
    res.send(randomQuote);
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});
