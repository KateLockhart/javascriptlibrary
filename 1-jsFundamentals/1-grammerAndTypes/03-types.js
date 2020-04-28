//Boolean - only can be true or false

let on = true;
console.log(on);

let off = false;
console.log(off);

//Null - null is an empty value. Think of it as an empty container: nothing is in there but it still exists as a space to fil.

let empty = null;
console.log(empty);

//Undefined - default value when a vaiable is not initialized

let undef = undefined;
let correct;

console.log(undef, correct);

//Numbers 

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded); //anything above 16 characters gets rounded

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);
console.log(aNumber);

let on = true;
console.log(on);
console.log(typeof on); //second type of example

//Strings - strings are datatypes used to represent text and are either wrapped in a single quotes(' '), double quotes (" "), or string interpalation(` `)
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);

let third = 1050 + "100";
console.log(third);
console.log(typeof third);

console.log(typeof first);
console.log(typeof second);

//Objects - objects are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);


//Arrays - are containers that hold lists of items
/*

...let list =..[...."item1",..."item2",..."item3"];
.......(1)....(2)....(3)

...1 - name of Array
...2 - arrays are denoted by square brackets
...3 - notice each value is seperated by a comma
*/
//.................(1),.(2),..(3)
let burritos = ["large", 4, true];
console.log(burritos);
console.log(typeof burritos);
//the same as writing it like this, an object:
let burritos = {
    1: "large",
    2: 4'
    3: true
}

//Challenge:

let mailingAddress = ["Kate", "Lockhart", "1323", "N Olney St", "Indianapolis", "IN", "46201"];
console.log(mailingAddress);

let firstName = "Kate";
let lastName = "Lockhart";
let houseNumber = 1323;
let street = "N OLney St";
let city = "Indinapolis";
let state = "IN";
let zipcode = 46201;

console.log(firstName, " ", lastName, " ", houseNumber, " ", street, " ", city, " ", state, " ", zipcode);
console.log(`$(firstName) $(lastName), $(houseNumber)`);

let myName = "Kate";
console.log(myName.length);//is counting characters in string

console.log(myName.toUpperCase());//must use set of empty paraenthasis to envoke the use of the function

let home = "My home is Indy";
console.log(home.includes("greenwood"));
console.log(home.includes("Indy"));

//challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" "));
console.log(sent.split(""));
console.log(sent.split("i"));


let cars;

