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