//asyncronist - code doesn't have to wait to load the rest of the site before loading returned data

//making a asyncronist function construction: 
//use "async " kayword, does have a space that follows
//async keyword allows us to use the "await" keyword
//await can only be used with async function
async function myFn () {
    await 
}
//consise arrow style (didn't get full example before teach moved on)
const myFn = async () =>


//anything returned from the function is a promise, promise is shown with the return keyword, and is accessed with .then method
async function myFn () {
    return "hello";
}
//write like:
myFn().then(data => console.log(data));
//or:
myFn().then(console.log);

//console.log full function to show the promise and value
myFn().then(console.log);

//.catch is for failure, .then is for sucess
//.catch catches the error 

async function myFn () {
    throw Error('this is a mistake');
}

myFn()
    .then(console.log)
    .catch(console.log)



//example set up to call on random dog
async function myFn () {
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    console.log(json);
}  

myFn()
   
fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
    

//without fetch to get data
async function myFn () {
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    return json;
} 
//promise resolvers to capture return
myFn()
    .then(console.log)
    .catch(console.log)