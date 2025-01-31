const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
//import models
const Ingredient = require("./models/ingredient.js");

const app = express();
const PORT = 3000;



//MIDDLEWARE
//connect mongodb using connection string from .env
mongoose.connect(process.env.MONGODB_URI);
//message then terminal starts
mongoose.connection.on("connected", ()=> {
    //name of database what connected
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});




app.get("/", (req, res) => {
    res.send("HOME");
}); 


// Get all ingredients
app.get("/ingredients", async (req, res) => {      
    let ingredients = await Ingredient.find({});  
    res.send(ingredients);
});


app.listen(PORT, (req, res) => {
    console.log("Server starts on port "+PORT);
})