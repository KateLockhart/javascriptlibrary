//redundant to write two if statements
//if else is one conditional statement: if conditional curlys else curlys (structure below)
/*
if () {

} else {

}
*/

let weather = 75;

if (weather < 70) {
    console.log("Wear a jacket.")
} else {
    console.log("No jacket needed.")
}

//challenge

let name = "Kate L";

if (name == "Kate L") {
    console.log("Hello my name is " + name)
} else {
    console.log("Hello, is your name?")
}
//run seperatly 
let name = "Sara";

if (name == "Kate L") {
    console.log("Hello my name is " + name)
} else {
    console.log("Hello, is your name " + name + "?")
}

//Challenge, second if challenge
//bronze
let name = "zAchARy";

console.log(name);

if (name[0] === name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey, this string isn't written correctly")
}

//silver
let name = "zAchARy";

if (name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase())
}

//gold
let name = "zAchARy";

if (name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase)
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}

//Challenge for Else If statement

let age = 22;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 18) {
    console.log("You can vote!");
} else if (age >= 21) {
    console.log("You can drink!");
}  else if (age >= 25) {
    console.log("You can rent a car!");
}
//flip whole order so its 25 down to 17


