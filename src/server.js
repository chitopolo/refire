var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist')))

var serverPort = process.env.PORT || 8080;

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../dist/index.html"));
});

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
