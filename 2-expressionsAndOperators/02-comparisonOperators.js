//Comparison operators are used for conditions

//double equal sign does not check data type, only values. Converts them both to strings. Thus log is true in 1st example, false in 2nd
console.log("3" == 3);

//strict equal does check for data type, will not compare strings to values
console.log("3" === 3);

//Not equal
console.log("3" != 3);

//strict not equal
console.log("3" !== 3);

//greater than, true or false returned
console.log(3 > 1);

//less than, true or false returned
console.log(3 < 1);

//greater than or equal to, T or F return, alligator must come before equal sign
console.log(5 >= 3);

//less than or equal to, T or F return
console.log(5 <= 4);

//and - checks multiple conditions, T or F return, reads left to right but one false value will turn return false
console.log(1 > 0 && 2 > 1)

//or - checks multiple conditions, t or f return, will be true as long as one reads true due to or versus and
console.log(1 > 0 || 2 > 7)