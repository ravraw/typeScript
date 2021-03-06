// String
let somename:string = "ravraw";
somename = "anothername";
// number
let someAge:number = 12;
someAge = 14;
// Boolean
let isValid:boolean = true;
isValid = false;

// Another way 

let someString: string;
someString = "string";
someString = "anotherString"; // no error

// Arrays

let numbers:string[] = ["one","two"];
numbers = ["1","2"];

// tuples
let address: [string,string,number,number] = ["street","house",99,99];

// enum

enum Colors  {
Red=100,
Green,
Blue
}

let myColor :Colors=Colors.Blue;
console.log(myColor);

// functions
function multiply(num1:number,num2:number):number{
  return num1 * num2;
}
function add(num1:string,num2:string):string{
  return num1 + num2;
}

// function defenation
let someFunction :(arg1:number,arg2:number)=> number;
someFunction = multiply;
//someFunction=add; // error -- function defination doesn not match

// Objects

let myObj:{name:string,age:string}= {
  name:"rav",
  age:"30"
}

// myObj={
//   fullName:"ravraw", // throws error wrong type
//   age:"30"
// }

// custom types

// create reusable type defination
type complex = {data:number[],output:(all:boolean)=>number[]}

let complex1:complex = {
  data:[1,2,3],
  output:function(all:boolean){
    return this.data
  }
}
let complex2: complex = {
  data: [1],
  output: function(all: boolean) {
    return [1]
  }
};

// union types
let someNumber: string | number | true = 13;
someNumber ="five";

// checking types 

let finalValue = 12;
if(typeof finalValue == "number"){
  console.log("Final value is a number")
}else{
  console.log("Not a number")
}

// never
function neverReturn(): never {
  throw new Error('An error!');
}

// nullable types
let canBeNull: number | null= 12;
canBeNull = null;