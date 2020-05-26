/*//each controller is a mini application
const express = require('express');
//router method is what creates the small modular applications that we use in the JS file
const router = express.Router(); */
//if above was written in one line of code :
const router = require('express').Router()
//CRUD stands for create read update delete

//importing model, docs state to capitalize; use double dots to reach out into other folder or file
const Pie = require('../db').import('../models/pie');

//creating a .get to fetch info; findAll will find all data inside that table; since it's a fetch we need .then for recieveing info and response 
// GET REQUEST
router.get('/', (req, res) => {
    Pie.findAll()
        .then(pies => res.status(200).json({
            pies: pies
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//POST REQUEST
router.post('/', (req, res) => {

    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }

    Pie.create(pieFromRequest)
        .then(pie => res.status(200).json({
            pie: pie
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//QUERY PIE BY NAME
//get is fetching an individually called on data in this case the nameOfPie by writting the name in the URL
router.get('/:name', (req, res) => {
    Pie.findOne({
        where: {
            nameOfPie: req.params.name
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE 
//known as a put method, searches table id to make changes to update it
router.put('/:id', (req, res) => {
    Pie.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE METHOD
router.delete('/:id', (req, res) => {
    Pie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})


//export the router and methods attached to it
module.exports = router; 

/*//calling on router and attaching the fetch & send
router.get('/iLovePie', (req, res) => res.send('I LOVE pie!'));
//can contain multiple end points that will change as the end of the URL chain changes
router.get('/iLoveCake', (req, res) => res.send('I LOVE cake!'));
*/