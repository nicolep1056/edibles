let http = require("http");
let port = 8080;

function handleRequest(request, response) {
    respnse.end("Working. Path Hit: " + request.url)
};

let server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("Listning on port no: " + port);
});