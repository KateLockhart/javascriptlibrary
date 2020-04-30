/*
falsy values:
1. false
2. 0
3. "" , ' ', ` ` (empty strings are false)
4. null
5. undefined
6. NaN (not a number - error when running equastion without a number)
*/

let isOn = true;

if (isOn == true) {
    console.log("The light is on.")
}
//also written as below example (above is redundant)
if (isOn) {
    console.log("The light is on.")
}
//does not read until isOn=false as let variable
if (isOn == false) {
    console.log("The light is off.")
}

//because statement is true, returns "Wear a jacket."
let weather = 60;

if (weather < 70) {
    console.log("Wear a jacket.")
}