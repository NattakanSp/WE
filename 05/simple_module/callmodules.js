const cm = require("./ownmodules.js");
const myUser = require("./mymodules");
const express = require("express");
const app = express();

const port = 8000;

app.use(express.json());

app.get("/api/date", (req, res) => {
  res.write("This date and time is currently :" + cm.mydateTime());
  res.write("\n Created by: " + cm.mySchool());
  res.end();
});

app.get("/api/myinfo/:fname/:age/:emai", (req, res) => {
  const fname = req.params.fname;
  const age = req.params.age;
  const email = req.params.email;
  const newUser = new myUser(fname, age, email);
  res.send(newUser.getUserInfo());
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
