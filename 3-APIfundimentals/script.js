//APIs extract more complex code away, so it creates a simple go between for your code and a server, it's a middle man like a socket for your electronics to get electricity
const baseURL = "https://api.spacexdata.com/v2/rockets"

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("table");
//fetch will use API to grab data from the URL supplied
//They return a "promise", JS uses asycronistic reading to read code form top to bottom, promise will call with the data once JS reaches that fetch function, but it may take time to deliver and JS can keep reading while wainting for data response
//promises are a bulit in code to make it easier to read, a promise has three potential processes that it can be in: pending-in process of executing, completion-sucessfully sends, failure-did not send
//promise chaining, call back that has two parameters: resolve or reject
searchForm.addEventListener("submit", fetchSpace);
//forms when they're submitted will automatically refresh the page, to see it we add an event listener to know that it did indeed happen thus we use the e.preventDefault to stop the refreshing
function fetchSpace(e) {
    e.preventDefault();
    
    fetch(baseURL)
        .then(data => data.json())
        .then(json => displayRockets(json))
        .catch(err => console.log(err));
}

//fetch(baseURL) calls on the URL, .then grabs the data; .then is called a promise resolver, the resolve case; takes on value of what is responded with(dot then)
//.catch is used to get a rejected promise, console.log-ing it will then show the err
//data is the placeholder for the data being returned, can be named anything
//converting data to be read with .json(), uses a method to always return a promise; turns into JS object
//with .then(json => console.log(json)) we then store data in the json placeholder


//building the display rocket function:
function displayRockets(rockets) {
    console.log("Results:", rockets);
    let eachRocket = rockets.forEach(r => {
        console.log(r);

        let rocket = document.createElement("tr");
        let rocketName = document.createElement("td");
        let rocketCost = document.createElement("td");

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    });
}

//console.log to see results 
//run -for each- on array to get desired data
//appending to change content to fit HTML document: use innerText and r to grab value with . to dig in
//insert elements with spaceShips vairable and use method appendChild to add the child element to the parent element, use rocket to give new table row w/ data
//parent.method(data desired/associated element used)