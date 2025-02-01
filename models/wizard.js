const mongoose = require("mongoose");

const wizardSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    elixirs: Array,


});

const Wizard = mongoose.model("Wizard", wizardSchema);

module.exports = Wizard;