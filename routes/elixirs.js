const express = require("express");
const router = express.Router();

//import collection from models
const Elixir = require('../models/elixir.js');

router
    .route("/")
    .get( async (req,res) => {
        const allElixirs = await Elixir.find();
        res.render("elixirs/index.ejs", { elixirs: allElixirs })
    })
    .post(async (req, res) => {    
        await Elixir.create(req.body);
        console.log("Elixir added");
        res.redirect("/elixirs");
    
    });

router
    .route("/new")    
    .get( (req,res) => {
        res.render("elixirs/new.ejs");
    })
    

router
    .route("/:id/edit")    
    .get(async(req,res)=>{
        let oneElixir = await Elixir.findById(req.params.id);
        res.render("elixirs/edit.ejs", { elixir: oneElixir});
    })

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            let oneElixir = await Elixir.findById(req.params.id);
            res.render("elixirs/one.ejs", { elixir: oneElixir});
        } catch {
            res.send("Invalid ID").status(400);
        }
    })
    .put( async (req,res) => {
        await Elixir.findByIdAndUpdate(req.params.id, req.body);
        console.log("Elixir updated");
        res.redirect("/elixirs");
    })  
    .delete( async (req, res) => {
        await Elixir.findByIdAndDelete(req.params.id);
        console.log("Elixir deleted");
        res.redirect("/elixirs");
    });



module.exports = router;    