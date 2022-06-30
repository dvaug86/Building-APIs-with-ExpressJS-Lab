//imports
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);


//local host
app.listen(3000);