const express = require("express");
const cors = require("cors");
const corsSettings = {
    origin: "*",
    methods: "GET",
    optionsSuccessStatus: 204,
};
const app = express();
const importData = require("./quotes.json");
let port = process.env.PORT || 3000;

app.get("/", cors(), (req, res) => {
    res.send("pAPI Franku");
});

app.get("/omniverse", cors(), (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});
