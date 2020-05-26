require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');

sequelize.sync(); 
app.use(express.json());
app.use(require('./middleware/headers'));

//EXPOSED ROUTES
app.use('/test', test);
app.use('/api/user', user);

//PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);


app.listen(3001, function(){
    console.log('App is listening on 3001.') //5
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});
