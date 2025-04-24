class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getUserInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}
module.exports = User