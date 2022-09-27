const express = require("express");
const { name } = require("./infos.json");

const app = express();

app.listen(4040, (req, res) => {
  console.log("listening in http://localhost:4040");
});

app.get("/", (req, res) => {
  res.status(200).send("funcionando :) " + name);
});
