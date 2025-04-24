const express = require("express");
const app = express();
const port = 8000;

// call mehod

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/overview", (req, res) => {
  res.send("Overview Page!");
});

app.get("/product", (req, res) => {
  res.send("Product Page!");
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
