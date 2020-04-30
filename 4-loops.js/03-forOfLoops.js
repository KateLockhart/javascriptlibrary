//For of Loops - used to loop over things that are able to be parced through with numbers or keys that are numbers, grabs the values of imbacies
//For Of is better for arrays
let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}
//will get an error because properties of objects do not have numbers, they're just keys so student is not iterable
for (let item of student){
    console.log(item);
}


//numbers, arrays, and strings have numbers as keys thus they work
let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "ragdoll"]

for (let cat of catArray) {
    console.log(cat);
}