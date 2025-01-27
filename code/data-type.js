let num = 42;
let stng = "Minu"
let bool = true;
let notAssigned;
let empty = null;
let sym = Symbol('unique');
let bigNum = 123456789012345678901234567890n;

// object
let obj = {
    name: "Amit",
    age: 25
};

// array
let arr = ["red", "green", "blue"];

// function
function func() {
    console.log("This is  a function");
}


console.log(typeof num); // number
console.log(typeof stng); // string
console.log(typeof bool); // boolean
console.log(typeof notAssigned); // undefined
console.log(typeof empty); // object
console.log(typeof sym); // symbol
console.log(typeof bigNum); // bigint
console.log(typeof obj); // object
console.log(typeof arr); // object