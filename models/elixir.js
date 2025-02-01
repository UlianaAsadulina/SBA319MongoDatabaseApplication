const mongoose = require("mongoose");

const elixirSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:true
    },
    effect:	String,
    sideEffects: String,
    characteristics: String,
    difficulty: {
        type: String,
        enum: [
            "Unknown", 
            "Advanced", 
            "Beginner", 
            "Moderate",  
            "Ordinary Wizarding Level", 
            "One Of A Kind"
        ],
        default: "Unknown",

    },
    ingredients: Array,
    inventors: Array,

});

const Elixir = mongoose.model("Elixir", elixirSchema);

module.exports = Elixir;