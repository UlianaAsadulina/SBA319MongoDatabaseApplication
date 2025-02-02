const express = require("express");
const router = express.Router();

//import data
const Spell = require("../models/spell.js");

router
    .route("/")

    .get(async (req, res) => {
        let allSpells = await Spell.find({});
        //res.send(allSpells);
        res.render("spells/index.ejs", { spells: allSpells });
    })
    .post(async (req,res) => {
        // Conditional to handle if book has been read
        if (req.body.canBeVerbal === "on") {
            req.body.canBeVerbal = true;
        } else {
            req.body.canBeVerbal = false;
        }
        await Spell.create(req.body);
        //
        res.redirect("/spells");
    });

router  
    .route("/new")    
    .get((req, res)=> {
        res.render("spells/new.ejs");
    });

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            let result = await Spell.findById(req.params.id);
            res.render("spells/one.ejs", { spell: result});
        } catch {
            res.send("Invalid ID").status(400);
        }
    })
    // .post(async (req, res) => {
    //             const metod = req.query._method;//Extract name from query 
    //     console.log(metod);
    
    //     res.send("POST ROUTE")

    // })
    .put( async (req,res) => {
        console.log('first');
        console.log("ID" +req.params.id);
        console.log('second');
        console.log(req.body);
        // Handle  checkbox data
        if (req.body.canBeVerbal === "on") {
            req.body.canBeVerbal = true;
        } else {
            req.body.canBeVerbal = false;
        }

        // Update the spell in the database
        await Spell.findByIdAndUpdate(req.params.id, req.body);
        
        console.log("Spell updated");
        // Redirect to the spell's show page to see the updates
        res.redirect(`/spells/${req.params.id}`);
    })
    .delete( async (req, res) => {
        await Spell.findByIdAndDelete(req.params.id);
        console.log("Spell deleted");
        res.redirect("/spells");
    });
    
router
    .route("/:id/edit")
    .get( async (req,res) => {
        const result = await Spell.findById(req.params.id);
        console.log("Document for CHANGE")
        console.log(result);
        res.render("spells/edit.ejs", { spell: result});
        
    });

module.exports = router;
