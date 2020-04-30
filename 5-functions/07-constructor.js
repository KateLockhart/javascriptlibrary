//constructor is a way to represent common or shared data, 

//..var...base object is {}
let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "Samsung",
};
//creating constuctor function to continue creating the constuct above
//left side is property, right is the parameter
//perameters seperated by commas are called arguments
function TV (screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
};

//dot notates getting into a variable and the object after is what it pulls, how to grab information
//var.object
myTv.refreshRate

//   var   construct func.  envoke w/ arguments
let firstTv = new TV(80, "led", 80, "LG");

console.log(firstTv.screenSize);