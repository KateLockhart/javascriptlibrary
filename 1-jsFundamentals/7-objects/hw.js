//Movie Object Repl
/*
let movie = {
    nameOfMovie: "Resident Evil",
    runTime: 100,
    genre: "Horror/Action",
    characters: [
        {
        name: "Alice",
        age: "Unknown; Human Clone",
        items: [
            {
          itemOne: "Dual 12 Gauge Sawed-Off Double Barreled Shotguns",
          itemTwo: "Anti-Virus Serum",
            }
          ]
        },
        {
        name: "Matthew 'Matt' Addison",
        age: "32",
        items: [
           {
            itemOne: "R.P.D. Badge",
            itemTwo: "P.D. Issued Handgun",
           }
          ]
        }
      ]
  }
  
  console.log(movie.nameOfMovie, movie.runTime, movie.characters, movie.characters[0].name, movie.characters[0].items[0].itemOne);
*/

//challenge: Pig Latin 

//CORRECT ANSWER

let firstText = "Hello"; //expecting: "elloHay"

const vowels = ["a", "e", "i", "o", "u"];

//Hello my name is jeff;

const pigLatin = (toTranslate) => {
  console.log(toTranslate);
  let translated = "";
  let wordsList = toTranslate.split(" ");
  console.log(wordsList)

  wordsList.forEach((item) => {
    console.log("FOR EACH LOOP RUNNING:");
    console.log(item);
    //procedure defined below
    let translatedWord;
    item = item.toLowerCase();  
    console.log(item);
    if (vowels.includes(item[0])) {
    translatedWord = item + "ay";
    console.log(translatedWord);
    } else {
    //with a for loop
    for (let i = 0; i < item.length; i++) {
     if (vowels.includes(item[i])) {
       console.log(translatedWord);
       let chunk = item.slice(0, i);
       console.log(chunk);
       translatedWord = item.slice(i) + chunk + "ay";
       console.log(translatedWord);
       i = item.length;
        }
      }//while (!vowels.includes(toTranslate[0])) {
    }   //let first = toTranslate[0];
       //toTranslate = toTranslate.substring(1) + first;
     //}
     //translated = toTranslate + "ay";
    translated += translatedWord = " ";
    console.log(translated);
  });
  //check whether the first character is a vowel or consonant
    // Vowel ->
      // add "ay" to the end of the word
      // -fin
    // Consonant ->  
      // remove from the fisrt consonant to the first vowel(iteration)
      //take those letters, in order, and place them at the end of the word
      //add "ay" to the end
      // -fin
  // return the translated word
  console.log(translated);
  return translated;
};

pigLatin("Pig Latin");

