console.log(name);
let name = "Kate";
//doesnt know name, becaue of stacked order. Doesnt have value for name until re structured with the let and value prior to the console.log

let name = "Kate";
console.log(name);
//now can find value because of proper written order let and value read before console.log

b();

function b() {
    console.log("I have been hoisted.")
}
//the function allows the written structure to change due to the information in the function being read in the first pass thus the "b();" can be stacked before and called
//no matter how much code and vairables are in between, the function allows you to call on its console/value anywhere in the stack/code






/*
JS runs like a 2 part system:
    Ledger Reads and Gathers Values
    below example means it has:
        variable for name whose value is currently undefined
        function called foo, that does {what in curlys}

*/
console.log(name);
foo();

