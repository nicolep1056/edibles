
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserverations", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/tables", function(req, res) {
  return res.json(characters);
});



