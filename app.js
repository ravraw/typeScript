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
