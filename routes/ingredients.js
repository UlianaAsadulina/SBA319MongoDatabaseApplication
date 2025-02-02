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
    })
    .put( async (req,res) => {
        await Ingredient.findByIdAndUpdate(req.params.id, req.body);
        console.log("Ingredient updated");
        // Redirect to the spell's show page to see the updates
        res.redirect("/ingredients");
    })
    .delete( async (req, res) => {
        await Ingredient.findByIdAndDelete(req.params.id);
        console.log("Ingredient deleted");
        res.redirect("/ingredients");
    });
    
router
    .route("/:id/edit")
    .get( async (req,res) => {
        const result = await Ingredient.findById(req.params.id);
        console.log("Document for CHANGE")
        console.log(result);
        res.render("ingredients/edit.ejs", { ingredient: result});
        
    });



module.exports = router;
