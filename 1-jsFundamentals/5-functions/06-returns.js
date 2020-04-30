//returns - allow us to use information from a function outside of the braces, acesses inside info as a return

let hi = () => {
    // 1
    return 'hi';
}
//     2        3
let greeting = hi();

/*

1- keyword that brings data out of function
2- new variable to hold the value of the return
3- when called, the function becomes the value of the return

*/
//gets return of 'hi'
console.log(greeting);


//take in and retrun the parameter
//block
function name(firstName) {
    return `Hello, ${firstName}!`;
}
//concise
let name = (firstName) => `Hello, ${firstName}!`


let greetedName = name('Leia Organa');

console.log(greetedName);


//examples, this is the same as below but written more consise with returns
function capitalizeName(name) {
    console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
}
//cleaner written with returns
function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

let correctName = capitalizeName('kAtE');

console.log(correctName);


//making a funct that finds area of rectangle
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}

let width = 5;
let length = 5;

let newArea = areaOfRectangle(length, width);

console.log(newArea);


//challenge: make a tip calculator using a function, have it RETURN the value, capture the returned value in a variable, print the new vaiable


function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent;
    return tip;
}
//names don't have to match, more about location in 
let myBill = 100;
let myTip = .2;

let totalTip = "$" + tip(myBill, myTip);

console.log(totalTip);