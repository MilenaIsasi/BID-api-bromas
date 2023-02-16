const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        require:[true, "Campo obligatorio"]
    },
    punchline: {
        type: String,
        require:[true, "Campo obligatorio"]},}, 
    { timestamps: true });


//User es el que creamos, usuarios es el que se guarda en moongose
const Joker = mongoose.model("usuarios", JokeSchema);

module.exports = Joker;
