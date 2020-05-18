//each controller is a mini application
const express = require('express');
//router method is what creates the small modular applications that we use in the JS file
const router = express.Router();

//calling on router and attaching the fetch & send
router.get('/iLovePie', (req, res) => res.send('I LOVE pie!'));
//can contain multiple end points that will change as the end of the URL chain changes
router.get('/iLoveCake', (req, res) => res.send('I LOVE cake!'));

//export the router and methods attached to it
module.exports = router; 