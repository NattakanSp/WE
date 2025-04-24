const e = require("express");
const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const esMembers = [
  { id: 3, fname: "Alice", lname: "Johnson", age: 21 },
  { id: 4, fname: "Bob", lname: "Brown", age: 23 },
];

app.get("/api/members", (req, res) => {
  res.json(esMembers);
});

app.get("/api/querymember", (req, res) => {
  const myQueryString = req.query.id;
  if (Object.keys(myQueryString).length != 0) {
    const memId = esMembers.find((member) => member.id == parseInt(myQueryString));
    if (memId) {
      res.send(memId);
    } else {
      res.send("Member not found!");
    }
  } else {
    res.status(400).send("Bad Request! Please provide a query string.");
  }
});

app.post("/api/addmembers", (req, res) => {
  const memId = req.body.id;
  const memFname = req.body.fname;
  const memLname = req.body.lname;
  const memAge = req.body.age;
  const newMember = {
    id: memId,
    fname: memFname,
    lname: memLname,
    age: memAge,
  };
  esMembers.push(newMember);
  res.send(newMember);
});

app.put("/api/editmembers/:id", (req, res) => {
  const memId = req.body.id;
  const memFname = req.body.name;
  const memLname = req.body.lname;
  const memAge = req.body.age;

  let memberData = esMembers.find((member) => member.id === parseInt(memId));
  if (memId) {
    memberData.fname = memFname;
    memberData.lname = memLname;
    memberData.age = memAge;
  } else {
    res.status(400).send("Member not found!");
  }
  res.send(esMembers);
});

app.delete("/api/deletemembers/:id", (req, res) => {
  const memId = req.params.id;
  const index = esMembers.findIndex((member) => member.id === parseInt(memId));
  if (index !== -1) {
    const newMember = esMembers.splice(index, 1);
    res.send(newMember);
  } else {
    res.status(400).send("Member not found!");
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
