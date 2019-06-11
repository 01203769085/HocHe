const express = require("express");
var app = express();

//route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/name/:ten", (req, res) => {
  console.log(req.params);
});

app.get("/name", (req, res) => {
  console.log(req.query);
});

app.listen(9000, () => {
  console.log("success");
});
