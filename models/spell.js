const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    incantation:String,
    effect: String,
    canBeVerbal: Boolean,
    spellType: {
        type: String,
        enum: [
            "None", 
            "Charm", 
            "Conjuration", 
            "Spell", 
            "Transfiguration", 
            "Healing Spell", 
            "Dark Charm", 
            "Jinx", 
            "Curse", 
            "Magical Transportation", 
            "Hex", 
            "Counter Spell", 
            "Dark Arts", 
            "Counter Jinx", 
            "Counter Charm", 
            "Untransfiguration", 
            "Binding Magical Contract", 
            "Vanishment",
          ],
          message: "{VALUE} is not a valid spell type!",
          default: "None",
          required: true,
    },
    light: String,
    creator: String,
});

const Spell = mongoose.model("Spell", spellSchema);


module.exports = Spell;