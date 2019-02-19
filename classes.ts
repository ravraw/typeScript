class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  greet(){
    console.log("Hi , How r u doing!!")
  }
}

//const me = new Person ("rav","raw");
class Programmer extends Person {
  normalGreet(){
    super.greet();
  }
  greet(){
    console.log("Hello World!!");
  }
}
const me  = new Programmer("rav","raw");

me.greet();
me.normalGreet();