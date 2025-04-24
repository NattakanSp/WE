const express = require("express");
const app = express();
const port = 8000;

// FN student
const fnStudents = [
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Smith", age: 22 },
];

// MK students
const mkStudents = [
  { id: 1, name: "Alice Johnson", age: 21 },
  { id: 2, name: "Bob Brown", age: 23 },
];

// major
const allMajors = {
  fn: fnStudents,
  mk: mkStudents,
};

// route1

app.get(
  "/api/:major",
  (req, res, next) => {
    const major = req.params.major.toLocaleLowerCase();
    if (major == "fn") {
      const jsonString = JSON.stringify(fnStudents);
      req.myobj = jsonString;
      next();
    } else if (major == "mk") {
      const jsonString = JSON.stringify(mkStudents);
      req.myobj = jsonString;
      next();
    } else {
      res.send("Major not found!");
    }
  },
  (req, res) => {
    req.myjob += "End of Date";
    res.send(req.myobj);
  }
);

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
