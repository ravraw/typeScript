"use strict";
// String
var somename = "ravraw";
somename = "anothername";
// number
var someAge = 12;
someAge = 14;
// Boolean
var isValid = true;
isValid = false;
// Another way 
var someString;
someString = "string";
someString = "anotherString"; // no error
// Arrays
var numbers = ["one", "two"];
numbers = ["1", "2"];
// tuples
var address = ["street", "house", 99, 99];
// enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 100] = "Red";
    Colors[Colors["Green"] = 101] = "Green";
    Colors[Colors["Blue"] = 102] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Blue;
console.log(myColor);
// functions
function multiply(num1, num2) {
    return num1 * num2;
}
function add(num1, num2) {
    return num1 + num2;
}
// function defenation
var someFunction;
someFunction = multiply;
//someFunction=add; // error -- function defination doesn not match
// Objects
var myObj = {
    name: "rav",
    age: "30"
};
var complex1 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1],
    output: function (all) {
        return [1];
    }
};
// union types
var someNumber = 13;
someNumber = "five";
// checking types 
var finalValue = 12;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
else {
    console.log("Not a number");
}
// never
function neverReturn() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
