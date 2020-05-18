//Challenge :
/*
Challenge (Arrays):
Color List:
Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
*/

let colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
    "Black",
    "Grey",
    "White"
];

let place = [
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th"
];

function printOrder (items, place) {
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]} is ${i + 1}${place[i]}`);
    }
}

printOrder(colors, place);

/*For a case with this array:
let place = [
    "st",
    "nd",
    "rd",
    "th"
];  

function printOrder (items, place) {
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]} is ${i + 1}${i >= 3 ? endings[3] : endings[i]}`);
    }
}
*/


/* My attempt:
function theCount(){
    return (place.forEach(placeItem => console.log(placeItem)) + " " + "is" + " " +
    colors.forEach(colorsItem => console.log(colorsItem)));
} 

theCount();
*/