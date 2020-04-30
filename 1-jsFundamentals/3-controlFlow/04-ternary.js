//Ternary

let num = 6;

(num > 0) ? console.log("yes") : console.log(no);

//if true, the first console log return will happen; if false whatever the return for the second bracket is, will be the result

if (num > 0) {
    console.log("Yes");
} else {
    console.log("No");
}


//This method is not as clean as Else If, will function though
(num === 0) ? console.log("Hello.") : (num > 0) ? console.log("hi") : console.log("goodbye");