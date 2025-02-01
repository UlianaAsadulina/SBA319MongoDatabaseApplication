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
    });

router.route("/:id").get(async (req, res) => {
    try {
        let result = await Spell.findById(req.params.id);
        res.send(result);
    } catch {
        res.send("Invalid ID").status(400);
    }
});

module.exports = router;
