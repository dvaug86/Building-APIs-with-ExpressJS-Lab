//imports
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/api', apiRouter);


//local host
app.listen(3000);