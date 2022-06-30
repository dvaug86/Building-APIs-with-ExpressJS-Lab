//imports 3rd Party Modules
const express = require('express');

//imports from project
const chirpsRouter = require('./chirps')
let router = express.Router();

//routers
router.use('/chirps', chirpsRouter);

//exports
module.exports = router;

