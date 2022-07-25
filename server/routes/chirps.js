//imports
const express = require('express');
const chirpstore = require('../chirpstore');

//create router
let router = express.Router();

//Routes-------------------------------------------------

//Get method
router.get('/:id?', (req, res) => {
    let id = req.params.id;

    if (id) {
        res.json(chirpstore.GetChirp(id));
    } else {
        res.send(chirpstore.GetChirps());
    }
});

//Post method
router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.sendStatus(200);
});

//Put method
router.put('/:id?', (req, res) => {
    chirpstore.UpdateChirp(req.params.id, req.body)
    res.sendStatus(200);
});

//Delete method
router.delete('/:id?', (req, res) => {
    chirpstore.DeleteChirp(req.params.id);
    res.sendStatus(200);
});

//exports
module.exports = router;