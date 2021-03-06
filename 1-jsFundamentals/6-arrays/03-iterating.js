//essentially acts as a for of loop, it runs a loop 

let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//length method attached to food variable will count the array
//must be ran seperatly from method below
//for (let i = 0; i < food.length; i++) {
   //to console.log each individual item:
 //   console.log(food[i]);
//}

//method to do above made for arrays, forEach does a specified action per element, will run given function; using concise notation
 food.forEach(foodItem => console.log(foodItem));

//can add an index, to get the embassy associated with that value
 food.forEach((foodItem, i)  => console.log(i, foodItem));



 //Challenge:

 let movies = ["Resident Evil", "World War Z", "28 Days Later"];

 movies.push("Zombieland");
 
 movies.splice(1, 1, "Shaun of the Dead");

 movies.forEach(movieTitle => console.log(movieTitle));
 //to return with embassys:
 movies.forEach((movieTitle, i) => console.log(i, movieTitle));


 //iterable and enumerable
 //iterable means it has numbers associated that we can parce through
 //enumerable means
 /*
 - iterating means to "loop over all elements of a set, one by one"
 - enumerating means to "give each element of a set an ordinal number, one by one"
 */
//good site with information: https://softwareengineering.stackexchange.com/questions/216988/is-there-a-difference-between-iterable-and-enumerable 