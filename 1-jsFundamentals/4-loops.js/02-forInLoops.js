//forInLoops are used to iterate over countaable properties, grabs the keys
//For In loops better for objects
//key: name/awesome/degree/week value:whatever comes after
let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item])
}

//keys are 0-4
let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "ragdoll"]

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//challenge write for loop capatalizes frist letter of a name and lowercase the rest of the name

let name = "kAtElYn";
let capName;

for (let l in name){
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);