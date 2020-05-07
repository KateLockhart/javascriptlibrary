let listTitle = document.getElementById('listTitle');
console.log(listTitle);

let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = "center";

listItem.style.color = "red";

let grocery = document.getElementsByClassName('groceryItem');
//this shows the 'listItems' as li.listItem
console.log(grocery);
//these both console.log the item selected "Boom Berry Juice" use [] because it's an array
console.log(grocery[2]);
console.log(grocery.item(2));
//to console.log all 8 list items as li.listItem
let listItems = document.getElementsByTagName('li');
console.log(listItems);
//to list them as a node list, different from above, node is attached to the DOM any nav, div, text, etc
let unorderedListItems = document.querySelectorAll('ul li');
console.log(listItem);
//shows number of child elements/nodes 
console.log(document.body.childNodes);
console.log(document.body.children);

let listDiv = document.getElementById("list");
//it's grabbing the child nodes, so it only shows the type not the element itself 
console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling.nextSibling);

//Challenge: select the input box and assign it to a variable called todoTitle

let todoTitle = document.getElementById("listInput");
console.log(todoTitle);


//challenge: give all list items an underline
for (tag of unorderedListItems) {
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "30px";
}

//to change text within a list or element
document.getElementsByClassName("listItem")[4].innerText = "Visit Gindelwald";
// Moondew Drops
document.getElementsByClassName("groceryItem")[0].innerText = "Moondew Drops";

//adding event listener that takes two arguments, callback function is event => {}
//target picks the html element which we're changing 
document.getElementById("clickMe").addEventListener("click", (event) => {event.target.style.backgroundColor = "lightblue";
});

document.getElementById("listInput").addEventListener("keyup", event => {
    console.log(event.target.value);
});

//adding to the list
let newGroceryItem = document.createElement("li");
console.log(newGroceryItem);

let groceryList = document.getElementById("groceryList");
//appendChild will put it on the end of target Id, always goes on end
groceryList.appendChild(newGroceryItem);
//to add/change text to list
newGroceryItem.innerText = "Ginger Root";

//order is incredibly important for how JS reads the formatting, the ginger root is only affected once the for loop is moved to the bottom
unorderedListItems = document.querySelectorAll("ul, li");
for (tag of unorderedListItems) {
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "30px";
}