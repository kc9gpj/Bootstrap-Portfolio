
var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
