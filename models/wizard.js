const mongoose = require("mongoose");

const wizardSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    elixirs: [{ 
        //id: String,
        name: String}],


});

const Wizard = mongoose.model("Wizard", wizardSchema);

module.exports = Wizard;