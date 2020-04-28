//Literal data types are the values you're assigning to your code, data used to initialize the code
//Simply just values

//string literal
let car = "Ford";

//numeric literal, numbers
let december = 12;

//boolean literal, true or false only
let tired = "false"

//object literal, curlys with value pairs
let soup = {
    a: "chicken noodle",
    b: "tomato"'
    c: "beef and barley"
}

//dot notation allows us to dig in and grab variables to get values, 
let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef and barley"
}

console.log(soup.a)

//array literal, each item has a key 1, 2, etc
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

//methods. example shows a full string of days, then the length is number of keys in array
console.log(days.toString());
console.log(days.length);
