for (let i = 1; i <= 100; i += 1){ // line 1
    console.log(i);  // line 2
}  // line 3

 //1        //2    //3
 for (let i = 1; i <= 10; i++){
    console.log("Number:", i);
}

for (let i = 0; i <= 50; i += 5){
    console.log(i);
}

for (var i = 20; i >= 1; i--){
    console.log(i);
}

for (var i = 3; i < 30; i += 5){
    console.log(i);
}

function pacersWon(){
    console.log("Pacers won!");
}

for(let i = 0; i < 5; i++){
    pacersWon(); // calls pacersWon function.
}