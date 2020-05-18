//POST CREATING DOTENV & .ENV:imports dotenv file so we can call on it to use it, use process.env
require('dotenv').config()

//importing the express package
const express = require('express');
//starts up app framework and gives it the express contoller, enovokes it
const app = express();

//adding the pie controller by creating a pies varible to use 
const pies = require('./controllers/pieController');


//PRE ENV: grab app variable and use listen method to get it to pay attention to which port to use ie 4000, fat arrow function just showing what it's listening on
//POST ENV: 400 is changed to process.env to get the port variable of 4000 since we assigned the .env to PORT = 4000
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

//use gives us access to to the controller through the pies variables and use the base endpoint of pies
app.use('/pies', pies);

//.get is a fetch request and response, fat arrow function sends the response we create
//app.get('/pies', (req, res) => res.send('I love pie!') ); *pulled out after controller was made


//app/server as a whole is the environment we're working in, dotenv(.env) is an environment variable to give whole app access to them
//good for protecting sensitive info and simplifying the code we write
//add at top in order to use it, needs to be put first to be ran first


//serving up a static method to grab public folder with '/public', telling app to use the static page with use
//app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

//how to render the static page with get, just / so it grabs url string
//get is denoting a fetch thus the request and response
//cannot just reach localhost:4000 because of the additional local routing denoted in the '/...'
//app.get('/', (req, res) => res.render('index'));