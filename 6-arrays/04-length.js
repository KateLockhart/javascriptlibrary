//length - 

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//length is one number higher than the last element/embassy defined, result is 10, length starts counting at 1 not 0
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors.length);
//to convert color array to singular string, dont forget () to envoke the method function
console.log(colors.toString());
//will return objects, JS considers arrays objects
console.log(typeof colors);


//Challenge:
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
//correct return
console.log(colors instanceof Array);
color.reverse();
colors.forEach(color => console.log(color));

//using an if statement
if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("Not an array!");
}


//Challenge: using the forEach method, capitalize the first letter of each color and lowercase the rest

let colors = ["blUe", "grEeN", "yElLow", "rEd", "orAnGe", "pUrPle"];
//block form
let correctSpelling = colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
})
//concise form
colors.forEach(color => console.log(color[0].toUpperCase() + color.slice(1).toLowerCase()));
