const express = require("express");
const router = express.Router();

//import collection from models
const Elixir = require('../models/elixir.js');

router
    .route("/")
    .get( async (req,res) => {
        const allElixirs = await Elixir.find();
        res.render("elixirs/index.ejs", { elixirs: allElixirs })
    });

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            let result = await Elixir.findById(req.params.id);
            res.send(result);
        } catch {
            res.send("Invalid ID").status(400);
        }
    });    

module.exports = router;    