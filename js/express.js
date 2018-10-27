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
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
<<<<<<< HEAD
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
=======

>>>>>>> 9037aa0eae1fcd1929f4ae6ccb6092140303cbf2
  
  // Displays all tables
  app.get("/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.post("/reservations", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newRes = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);

  reservations.push(newRes);

  res.json(newRes);
  });

  app.listen(port, function() {
    console.log("App listening on port " + port);
  });