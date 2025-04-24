const getStudent = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = {
        id: id,
        name: "John Doe",
        age: 20,
      };
      resolve(student);
    }, 2000);
  });
};

getStudent(1).then((student) => {
  console.log(student); // { id: 1, name: 'John Doe', age: 20 }
});
