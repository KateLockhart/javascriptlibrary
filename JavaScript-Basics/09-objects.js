//1                //2
let bobAlcorn = {
    //3                 //4
    name            : "Bob Alcorn",
    age             : 59,
    vocation        : "Chief Operating Officer",
    isRetired       : false
};

console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3

console.log(bobAlcorn.middleName); //undefined: middleName does not exist

let player = {
    //3                 //4
    username        : "Player 1",
    power           : "great",
    toughness       : "level 10",
};

console.log(player);
console.log(player.power);
console.log(player.name);
