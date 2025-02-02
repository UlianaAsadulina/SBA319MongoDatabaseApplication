const express = require('express');
const router = express.Router();

//import data
const Ingredient = require('../models/ingredient.js');


router
    .route("/") 

    .get(async (req, res) => {
        let allIngredients = await Ingredient.find();
        res.render("ingredients/index.ejs", { ingredients: allIngredients })
        
    })

    .post(async (req, res) => {    
        await Ingredient.create(req.body);
        console.log("Ingredient added");
        res.redirect("/ingredients");
        
    });
    

    
router
    .route("/:id")
    .get(async (req, res) => {
        try {
            let result = await Ingredient.findById(req.params.id);
            res.send(result);
        } catch {
            res.send("Invalid ID").status(400);
        }
    });



module.exports = router;
