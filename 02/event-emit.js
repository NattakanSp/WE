const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

setImmediate(() => {
  eventEmitter.emit("register", {
    name: "John Doe",
    email: "John@email.com",
  });
});

eventEmitter.on("register", (data) => {
  console.log("User registered: ", data);
});

eventEmitter.on("register", (data) => {
  console.log("Send email to: ", data.name);
});
