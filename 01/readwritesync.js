const fs = require("fs");
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  console.log("File written successfully!", data);
});
