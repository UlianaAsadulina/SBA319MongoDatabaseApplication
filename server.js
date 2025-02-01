const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
//import models
//const Ingredient = require("./models/ingredient.js");

const app = express();
const PORT = 3000;


// route imports
const elixirs = require("./routes/elixirs.js");
const ingredients = require("./routes/ingredients");
const spells = require("./routes/spells")
const wizards = require('./routes/wizards');



//MIDDLEWARE
//connect mongodb using connection string from .env
mongoose.connect(process.env.MONGODB_URI);
//message then terminal starts
mongoose.connection.on("connected", ()=> {
    //name of database what connected
    console.log(`Connected to DB ${mongoose.connection.name}`);
});

app.use(express.urlencoded({ extended: false }));

//router
app.use("/elixirs", elixirs);
app.use("/ingredients", ingredients);
app.use("/spells", spells);
app.use("/wizards", wizards);

//ROUTES

app.get("/", (req, res) => {
    // res.send("HOME");
    res.render("home.ejs");
}); 


// // Get all ingredients
// app.get("/ingredients", async (req, res) => {      
//     let ingredients = await Ingredient.find({});  
//     res.send(ingredients);
// });



// 404 Middleware
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});


// Another error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});


app.listen(PORT, (req, res) => {
    console.log("Server starts on port "+PORT);
})