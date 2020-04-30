//Loops are a quick and easy way to jump over things until a specialized definitition results in false, split by semicolons, a three step running process

let i = 7;

//....(1)....(2)....(3)
for (i = 0; i > 10; i++) {
    console.log(i);
}

console.log(i);

/*
1. Initial expression -runs once before the loop starts. Grabs the global variable.
2. Condition - Loop runs until the condition evaluates to false
3. Increment expression - Runs once after each iteration of the loop
*/


//now the global variable is 7 but the local is 0 because of the let in the for
let i = 7;

//....(1)....(2)....(3)
for (let i = 0; i > 10; i++) {
    console.log(i);
}

console.log(i);

//challenge: use a for loop to count to 20 by 2's, 'i = 0' is the local vaiable and thus 'let i = 0' does not need to be written above

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

//challenge: use a for loop to count from 10 to 0, going down by 1.

for (i = 10; i >= 0; i--){
    console.log(i);
}

//challenge: use a loop to count from 0 to -24, going down by 2's

for (x = 0; x >= -24; x -= 2) {
    console.log(x);
}

//challenge: use a for loop, go through a name and display each letter indiviually

let name = "Kate";

for (i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//challenge: use a for loop that adds up all the numbers from 1 to 50, should equal 1275. Global variable is 'let sum = 0' and the scope variable is 'let i = 1'
/* 
why you put "let sum = 0" outside { }
-Because we need a variable that was able to be accessed outside the for loop, so we needed to create a global scope variable that we could just add the number of each iteration to that sum variable
-if we created the sum variable inside the for loop, everytime the loop ran, it would create a new instance of that variable
*/

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log(sum);

