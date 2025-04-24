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

app.get("/api/:id/:major", (req, res) => {
  const id = req.params.id;
  const major = req.params.major.toLocaleLowerCase();

  if (allMajors[major]) {
    if (major == "fn") {
      let studentData = fnStudents.find((student) => student.id == parseInt(id));
      if (typeof studentData === "undefined") {
        res.send("Student not found!");
      } else {
        res.send(studentData);
      }
    } else if (major == "mk") {
      let studentData = mkStudents.find((student) => student.id == parseInt(id));
      if (typeof studentData === "undefined") {
        res.send("Student not found!");
      } else {
        res.send(studentData);
      }
    } else {
      res.send("Major not found!");
    }
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
