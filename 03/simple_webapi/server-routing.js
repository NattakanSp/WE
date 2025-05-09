const http = require("http");
const url = require("url");
// create a server

const server = http.createServer((req, res) => {
  // implement routing
  const pathName = req.url;
  if (pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else {
    res.writeHead(404);
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
