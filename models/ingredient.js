const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
});
//create index
ingredientSchema.index({ name: 1 });
//create model
const Ingredient = mongoose.model("Ingredient", ingredientSchema); 

module.exports = Ingredient;