const express = require("express");
const router = express.Router();

const Wizard = require("../models/wizard.js");

router.
    route("/")
    .get( async (req,res) => {
        const allWizards = await Wizard.find({});
        res.send(allWizards);
    });

module.exports = router;