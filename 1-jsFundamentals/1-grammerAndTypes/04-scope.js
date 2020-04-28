let x = 12;

function scope () {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

//var vs let

var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

//var bug will scope the whole function, it scopes to the closeest function block

var x = 12;

function varTest() {
    var x = 33;
    if (false) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

//let scopes to the nearest enclosing code block, let keeps values inside the curly braces(code block).

varTest();
console.log(x);

let x = 12;

function varTest() {
    let x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

//let and const work the same way in this instance

varTest();
console.log(x);

const x = 12;

function varTest() {
    const x = 33;
    if (true) {
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);