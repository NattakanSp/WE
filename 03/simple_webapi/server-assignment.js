const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from server assignment");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to request on port 3000");
});
