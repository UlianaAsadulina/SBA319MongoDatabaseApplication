const express = require('express');
const router = express.Router();

//import data
const Ingredient = require('../models/ingredient.js');


router
    .route("/") 

    .get(async (req, res) => {
        let ingredients = await Ingredient.find({});
        res.send(ingredients);
    });
    // .post((req, res, next) => {
    //     //if  the body of the post request contain name
    //     if (req.body.name) {
    //         //check if this ingredient already exists
    //         if (ingredients.find((ingr) => ingr.name === req.body.name)) {
    //             next(error(409, `Ingredient already in database`));
    //         } 
    //         else {
    //             //create a new variable with body request
    //             const ingredient = {
    //                 id: ingredients[ingredients.length - 1].id + 1,          
    //                 name: req.body.name
    //             };
    //             //add this variable to the array of ingredients
    //             ingredients.push(ingredient);
    //             //send sesponse in JSON format
    //             console.log(`Array of ingredients ${ingredients.length}`);
    //             res.json(ingredients[ingredients.length - 1]);
    //             console.log("Ingredient successfully added");
                
    //         }
    //     } else //if the body of the post request do not contain data or not enough data - call an error function
    //         next(error(400, "Not enough Data to Create"));
    // });
    

router
    .route("/:id")
    .get((req, res) => {
        const oneI = Ingredient.findOne( { $regex: req.params.id});
        if (ingredient) res.send(oneI)
        else res.send("Not found");// next();//call error handling
    });
    // .patch((req, res, next) => {
    //     const ingredient = ingredients.find((ingr, i) => {
    //         if (ingr.id == req.params.id) {
    //             for (const key in req.body) {
    //                 ingredients[i][key] = req.body[key];
    //             }
    //             return true;
    //         }
    //     });

    //     if (ingredient) res.json(ingredient)
    //     else next();
    // });

//let's say what we can only add new ingredients and change them but can't delete them   

module.exports = router;
