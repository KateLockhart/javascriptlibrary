//parameters - named just like variables, parameter is just a placeholder variable for a value we do not know yet. Then when we call/invoke the function, we supply that value, and that is known as the argument .

// keyword    name     parameter(s)
  function      hi         (name) {
      console.log(`Hi, ${name}.`);
  }
//will call as 'hi undefined', because function has been declared but name has not
  hi();
  //will call with 'hi kate' because we gave the parameter a value of kate
  hi('Kate');

//challenge: write a function with two parameters: one for first name and one for last name; then have them come together as a variable inside  the function console.log "Hello, my name is <your name>." call the function.

 //multiple parameters are sepperated by commas, and called on by seperate ${}
function yourName (first, last) {
    console.log(`Hello, my name is ${first} ${last}.`);
}
yourName('Kate', 'Lockhart');