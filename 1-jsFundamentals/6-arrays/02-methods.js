//methods - attachs to variable by the . (dot)
//there are numerous methods you can use

let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];
//to just grab keys
for(let foodItem of food){
    console.log(foodItem);
}
//to grab embassys
/*for(let foodItem in food){
    console.log(foodItem);
}*/

//will console.log array with pizza added
food.push("Pizza");

//spliced is used to delete and add items of array
//first number is index, second is the number of embassys to be deleted, third value will replace what's deleted
food.splice(1, 4, "Tacos")

//will return with full updated list of items
console.log(food);

//pop method returns a value, which can be captured in a variable
let removedFood = food.pop();
console.log(removedFood);

//unshift adds items to beginning of array
food.unshift("Burritos");
console.log(food);