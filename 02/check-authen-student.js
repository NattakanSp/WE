const checkAuth = (id, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const authData = "fkjeffljfrf";
      console.log("Meber authenticated");
      resolve({ id: id, password: password, authData: authData });

      reject(new Error("Invalid credentials"));
    }, 2000);
  });
};

const getStudentData = (auth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = {
        name: "John Doe",
        permission: "member",
      };
      resolve(student);
    }, 2000);
  });
};

const getAuthResult = async () => {
  try {
    const auth = await checkAuth(1, "12345678");
    const student = await getStudentData(auth);
    console.log(auth);
    console.log(student);
  } catch (error) {
    console.log(error.message);
  }
};

getAuthResult();
