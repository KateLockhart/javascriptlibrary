//useState allows us to use state variables into the doc, they only live inside the component you put them in
//state data is usally just presentational data/info, written with the const variable
//useState accepts 2 values, the first is the state variable the sets the initial variable that we start from, the second is the means for updating or changing the state
// ex: [varName, setVarName] must use set
// use {sessionToken}(ex) to display it to the screen
//useState will show what's to be displayed, string or integer
import React, {useState} from 'react';
import './App.css';

//IMPORTING THE NAV BAR
import Navbar from './components/Navbar/Navbar';
//in the function app, Navbar is 
//to assign prop to Navbar for example we would write in the function as such <Navbar token={sessionToken} string={string} num={number} object={obj} /> with the vaiables written above like let string = 'this is a string'  let number = 4 etc.

function App() {
  //the state variable
  const [sessionToken, setSessionToken] = useState(undefined);

  return (
    <div className="App">
      <Navbar />
      <p>This is a test of react!</p>
    </div>
  );
}

export default App;




// ARRAY DESTRUCTURING 
// Destructuring in JavaScript is a symplified method of extracting multiple properties taking the structure of the array, and then deconstructing it down into individual part variables
// so first will equal value of "fellowship of the ring" etc.
/*
let[first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
//to view the vaules in the order specified by the ()
console.log(first, second, third);

//another example to show you can skip a var and a will be mercury and c equal mars
let[a, , c] = ['Mercury', 'Venus', 'Mars'];
console.log(a);
console.log(c);

//using useState with the larger array using the array variable
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']
//... represents the spead operator
let[first, , third, ...others] = planets;
console.log(first);
console.log(third);
console.log(others);//others grabs the rest of the array and returns and assigns them to a new array
*/