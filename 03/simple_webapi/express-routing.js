const express = require('express');

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/user", (req, res) => {
  const userData = {
    name: "John Doe",
    age: 30,
  };
  res.send(userData);
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening to request on port ${port}`);
});
