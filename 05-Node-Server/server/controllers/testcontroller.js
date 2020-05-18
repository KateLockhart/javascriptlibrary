var express = require('express'); //1
var router = express.Router(); //2

//3   //4   //5          //6
router.get('/', function (req, res) {
    //7
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res) {
    res.send('This is an ABOUT route!')
});

//1 Pass in an object
router.get('/contact', function (req, res) {
    res.send({user: "kenn", email: "kenn@beastmode"});
});

//2 Pass in an array
router.get('/projects', function (req, res) {
    res.send(['Project 1', 'Project 2']);
});

//3 Pass in an array of objects
router.get('/mycontacts', function (req, res) {
    res.send([
        {user: "quincy", email: "kenn@beastmode.com"},
        {user: "aaron", email: "arron@beastmode.com"},
        {user: "quincy", email: "quincy@beastmode.com"},
        {user: "tom", email: "tom@beastmode.com"}
    ]);
});
//8
module.exports = router;