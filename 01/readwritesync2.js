const { error } = require("console");
const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log("first :", data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log("second :", data3);
    });
  });
});
console.log('will read file!');