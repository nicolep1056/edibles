var express = require('express');
var path = require('path');

var app = express();
var port = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = []
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  

  
  // Displays all tables
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  
  app.post("/api/tables", function(req, res) {
    for (var i = 0; i < 4; i++) {
      res.json(reservations[i]);
    }
  });

  app.get("/api/waitlist", function(req, res) {
    for (var i = 5; i < reservations.length; i++) {
      res.json(reservations[i])
    }
  });

  app.listen(port, function() {
    console.log("App listening on port " + port);
  });