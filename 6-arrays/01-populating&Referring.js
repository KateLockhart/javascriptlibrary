//arrays are a list of data or information
//to denote we use [ ]

//   (1)   (2)     (3)
let list = [ "item1",....."item2",......"item3"];

/*
1 - variable name holding the array
2 - arrays are denoted by square brackets
3 - each item in the array are seperated by commas regardless of the data type
*/

//(embassy #'s) (0)       (1)      (2)
let fruit = ["orange", "banana", "apple"];
//to grab just orange, see below
//call on variable name [# of item]
console.log(fruit[0]);

//Examples
let students = [
    "Mitchell",
    "Bill",
    "Brittany",
    23,
    true,
    ["Hustin", "Amanda", "John", [20, true, "Slayde"]]
]

//to grab "Amanda" out of nested array, see below to understand JS interpretation
console.log(students[5][1]);
//to grab "Slayde" out of double nested array, see below to understand JS interpretation
console.log(students[5][3][2]);
//to check to see if array is a class constructor, T or F result, can also check if object or string
console.log(students instanceof Array);
console.log(students instanceof Object);
console.log(students instanceof String);