const express = require('express');
const router = express.Router();

//import data
const Spell = require('../models/spell.js');


router
    .route("/") 

    .get(async (req, res) => {
        let spells = await Spell.find({});
        res.send(spells);
    });

module.exports = router;