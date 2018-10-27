let http = require("http");
let port = 8080;

function handleRequest(request, response) {
    respnse.end("Working. Path Hit: " + request.url)
};

let server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("Listning on port no: " + port);
});



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all tables
  app.get("/tables", function(req, res) {
    return res.json(tables);
  });