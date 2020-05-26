var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.post('/one', function(req, res){
    res.send("Got a post request.")
});

router.post('/two', function (req, res) {
    let testdata = "Test data for endpoint two";

    TestModel.create({
        testData: testdata,
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

router.post('/three', function (req, res) {
    var testdata = req.body.testData.item;
    TestModel.create({
        testData: testdata,
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

router.post('/four', function (req, res) {
    var testdata = req.body.testData.item;
    TestModel.create({
        testData: testdata
    })
    .then(
        function message() {
            res.send("Test 4 went through!");
        }
    );
});

router.post('/five', function (req, res) {
    var testdata = req.body.testData.item;
    TestModel.create({
        testData: testdata
    })
    .then(
        function message(data) {
            res.send(data);
        }
    );
});

router.post('/six', function (req, res) {
    var testdata = req.body.testData.item;
    TestModel.create({
        testData: testdata
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
    );
});

router.post('/seven', function (req, res) {
    var testdata = req.body.testData.item;
    TestModel.create({
        testData: testdata
    })
    .then(
        function createSucess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})

router.get('/one', function(req, res) {
    TestModel.findAll({
        attributes: ['id', 'testData']
    })
    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});


module.exports = router;

/*var express = require('express'); //1
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
//8*/
