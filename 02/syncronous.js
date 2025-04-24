const step1 = () => {
  console.log("The first step");
};
const step2 = () => {
  console.log("The second step");
};
step1();
step2();

const myRequest = (data, callback) => {
  const response = 10 + data;
  const error = undefined;
  const result = callback(error, response);
  return result;
};
const myCallback = (error, res) => {
  if (error) return "You have got error";
  else return res;
};
const result = myRequest(5, myCallback);
console.log(result);
