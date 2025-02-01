const express = require("express");
const router = express.Router();

const Wizard = require("../models/wizard.js");

router.
    route("/")
    .get( async (req,res) => {
        const allWizards = await Wizard.find({});
        res.render("wizards/index.ejs", { wizards: allWizards });
    });

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            let result = await Wizard.findById(req.params.id);
            res.send(result);
        } catch {
            res.send("Invalid ID").status(400);
        }
    });    

module.exports = router;