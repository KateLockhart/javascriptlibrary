//The difference between an array and objects are their key value pairs
//Objects store multiple sets of data in the key value format
//denoted by {}

//an empty object literal, see below
//let netflix = {}

//assign values in objects with : and sperate with , (comma)
//to nest another object use {}, can nest multiple objects into an array

let netflix = {
    id: 1,
    name: "The Office",
    seriesInfo: {
        seasons: 9,
        seasonInfo: [
            {
                season: 1,
                episodes: 6,
                episodeInfo: [
                    {
                        episode: 1,
                        episodeName: "Pilot"
                    },
                    {
                        episode: 2,
                        episodeName: "Diversity Day"
                    }
                ],
            },
            {
                season: 2,
                episodes: 22,
                episodeInfo: [
                    {
                        episode: 1,
                        episodeName: "The Dundies"
                    }
                ]
            }
        ],
    },
};

//to console.log the object
//console.log("Whole Object:", netflix);

//to just grab the series info use dot notation
//console.log("Just Series Info:", netflix.seriesInfo);

//to just grab the season info 
//console.log("Just Season Info:", netflix.seriesInfo.seasonInfo);

//to grab the individual season:
//console.log("Just Season Info:", netflix.seriesInfo.seasonInfo[1]);

//to grab the episode, square bracket digs into the second array:
//console.log("Just Episode Info:", netflix.seriesInfo.seasonInfo[0].episodes[0]);


//Challenge: grab just the episode name "The Dundies"

console.log("Season 2 Episode 1:", netflix.seriesInfo.seasonInfo[0].episodeInfo[1].episodeName);


//api holds information, it's a database, the json data
//json extension reads the api information to turn it from keys and strings to organized formatting


let spaceJam = {
    toonsquad: {
        human: "Michael Jordan",
        rabbit1: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
        tDevil: "Tasmanian Devil",
        bird: "Tweety",
        cat: "Slyvester",
        pig: "Porky Pig"
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
        4: "Blanko"
    },
    nbaPlayers: {
        phoenixSuns: "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkKnicks: "Patrick Ewing",
        charlotteHornets1: "Larry Johnson",
        charlotteHornets2: "Muggsy Bogues"
    }
}

//using the class constructor, has it's own methods, envoke with brackets and supply with object being checked; returns keys of team names
console.log(Object.keys(spaceJam));
//returns toon squad object keys, member names
console.log(Object.keys(spaceJam.toonSquad));
//return monster name, uses [] to dig into the object to grab the value of "Bupkis", cannot dig into object with .# 
console.log(spaceJam.monstars[0])

//to return the values, ex returns toonSquad, etc 
console.log(Object.values(spaceJam));

//JS hates spaces, keys can be numbers or names(ex. "The Mighty Ducks") but when written as a name must be grabbed with [] "["The Mighty Ducks"]" square brackets not ".The Mighty Ducks"



let garden = {
    vegetable: "zucchini",
    flower: "sun flowers",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

let keys = Object.keys(garden);
//returns array of keys
console.log(keys);
//gives key type, this ex is strings
console.log(typeof keys[0]);
//just grab zucchini
let zucchini = garden.vegetable;
console.log(zucchini);
//square bracket notation to grab zuc., since it's a string we use a sting not 0 
let zucchini = garden["vegetable"];
console.log(zucchini);

//we can set properties by creating a new property to put into the object
let baking = {};
    //bunch of code


//to add new property/key, set and assign value
baking.zucchini = "Better make some bread!"
console.log(baking);

//square bracket notation
baking["flour"] = "Batter Up!";
console.log(baking);
// this reads "Better make some bread" because JS reads [garden["vegetable"] as zucchini first thus it then reads (baking[zucchini]) second and results
console.log(baking[garden["vegetable"]]);

//cannot .push because that method is connected to the array class constuctor, we're working with strings