//arrow functions - advantage is using less space than funct expressions

// variable   fat arrow
    let hi  =  () => {
        console.log('Hi');
    }

    //arrow functions were introduced in ES6. They are basically a more consise way to write function expressions - NOT declarations

    //this means arrow functions do not get hoisted


//BLOCK BODY
let hi = () => {
    console.log('hi');
    /*

    Lots of code goes here


    */
   //return goes here
}

//NOTE: block body arrow functions must have a return (if you want to get information out) in the body of the functions
//(return must be in between curly braces)


//CONCISE BODY, can only do one thing as part of funct, can use curly braces for multiple, has one job or effect
let hi = () => console.log('hi');
//NOTE;: consise body arrow functions return by default; they automatically give back the information
//can pass through multiple things but only affects the one input, uses curly braces
let hi = () => {console.log('hi'); console.log(5 + 10)};


//BLOCK VS CONCISE:
//BLOCK:
//parenthesis are optinal with single parameter
let greeting = name => {
    console.log(`Greetings, ${name}!`);
}

greeting('Kate')
//multiple parameters need paraenthesis
let greeting = (firstName, lastName) => {
    console.log(`Greetings, ${firstname} ${lastName}!`);
}
greeting('Kate', 'Lockhart');

//NOTE:when you have no or multiple parameters, you must include parenthesis; however when you have a single parameter the parenthesis are optional

//CONCISE:
