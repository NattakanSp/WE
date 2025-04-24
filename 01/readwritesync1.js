fs.readFile("./txt/input.txt", "utf-8", (err, data1) => {
  fs.readFile("./txt/input.txt", "utf-8", (err, data2) => {
    console.log("File written data2", data2);
    fs.readFile("./txt/input.txt", "utf-8", (err, data3) => {
      console.log("File written data3", data3);
    });
  });
  console.log("File written data1", data1);
});
