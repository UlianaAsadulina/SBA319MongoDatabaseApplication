const express = require("express");
const router = express.Router();

//import collection from models
const Elixir = require('../models/elixir.js');

router
    .route("/")
    .get( async (req,res) => {
        const allElixirs = await Elixir.find({});
        res.send(allElixirs);
    });

module.exports = router;    