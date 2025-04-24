const myAsynceFunction = async () => {
  const result = await Promise.resolve("Hello World!");
  console.log(result); // Hello World!
  return result;
};

myAsynceFunction();
